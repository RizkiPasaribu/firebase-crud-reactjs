import React, { useState, useEffect } from "react";
import { tambahData, updateData } from "../MyFunc";

export function ModalInput({ modal, setModal, getUsers }) {
  const [inputNama, setInputNama] = useState("");
  const [inputUmur, setInputUmur] = useState("");

  //reRender Setiap modal berubah
  useEffect(() => {
    if (modal[1]) {
      setInputNama(modal[1].Nama);
      setInputUmur(modal[1].Umur);
    }
  }, [modal]);

  return (
    <div>
      {/* Modal */}
      {/* background abu abu */}
      {modal && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20" />
      )}
      <div
        onClick={(e) => {
          setModal(false);
          setInputNama("");
          setInputUmur("");
        }}
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
              {modal[1] ? "Edit Data" : "Tambah Data"}
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
              onClick={(e) => {
                {
                  modal[1]
                    ? updateData(inputNama, inputUmur, modal[1].id, getUsers)
                    : tambahData(inputNama, inputUmur, getUsers);
                }
                setModal(false);
                setInputNama("");
                setInputUmur("");
              }}
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
