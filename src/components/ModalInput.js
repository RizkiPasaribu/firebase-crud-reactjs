import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export function ModalInput({ modal, setModal, getUsers }) {
  const [inputNama, setInputNama] = useState("");
  const [inputUmur, setInputUmur] = useState("");

  // add Data
  async function tambahData() {
    setInputNama("");
    setInputUmur("");
    setModal(false);

    try {
      await addDoc(collection(db, "users"), {
        Nama: inputNama,
        Umur: inputUmur,
      });

      //pesan Sukses
      const para = document.createElement("div");
      para.style.backgroundColor = "#c4ffc8";
      para.style.margin = "10px auto";
      para.style.padding = "15px";
      para.style.color = "green";
      para.style.width = "100%";
      para.style.height = "100%";
      const node = document.createTextNode("Data berhasil Ditambahkan...");
      para.appendChild(node);
      const element = document.getElementById("sukses");
      element.appendChild(para);
      setTimeout(() => {
        document.querySelector("#sukses div").remove();
      }, 3000);

      // render tabel
      getUsers();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      {/* Modal */}
      {/* background abu abu */}
      {modal && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20" />
      )}
      <div
        onClick={(e) => setModal(false)}
        className={
          "absolute w-screen h-screen top-0 right-0 flex justify-center " +
          (modal ? "visible" : "invisible")
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            (modal ? "translate-y-10" : "-translate-y-[400px]") +
            " transition-all duration-300 ease-out rounded-md border-gray-300 p-5 bg-slate-500 w-[310px] h-[280px]"
          }
        >
          <div className="float-right">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="text-white text-center"
            >
              x
            </button>
          </div>

          <div className="clear-both border-b-2">
            <h1 className="text-lg font-bold text-white text-center">
              Tambah Data
            </h1>
          </div>

          <div className="mt-2 text-white">
            <label className="block">Nama</label>
            <input
              placeholder="Masukkan Nama..."
              type="text"
              value={inputNama}
              onChange={(e) => setInputNama(e.target.value)}
              onChange={(e) => setInputNama(e.target.value)}
              className="text-black h-8 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
            />
          </div>

          <div className=" mt-2 text-white">
            <label className="block">Umur</label>
            <input
              placeholder="Masukkan Umur..."
              type="text"
              value={inputUmur}
              onChange={(e) => setInputUmur(e.target.value)}
              className="text-black h-8 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
            />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={(e) => tambahData()}
              className="bg-green-500 px-2 rounded-md hover:opacity-80 h-1/2 text-white"
            >
              Simpan Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
