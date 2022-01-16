import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

// add Data
async function tambahData(inputNama, inputUmur, getUsers) {
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

// Read Data
const getData = async () => {
  const data = await getDocs(collection(db, "users"));
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// Update Data
async function updateData(inputNama, inputUmur, id, getUsers) {
  try {
    await updateDoc(doc(db, "users", id), {
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
    const node = document.createTextNode("Data berhasil Di Update...");
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

// hapus data
async function deleteData(id, getUsers) {
  await deleteDoc(doc(db, "users", id));

  //pesan Delete
  const para = document.createElement("div");
  para.style.backgroundColor = "#c4ffc8";
  para.style.margin = "10px auto";
  para.style.padding = "15px";
  para.style.color = "green";
  para.style.width = "100%";
  para.style.height = "100%";
  const node = document.createTextNode("Data berhasil Dihapus...");
  para.appendChild(node);
  const element = document.getElementById("sukses");
  element.appendChild(para);
  setTimeout(() => {
    document.querySelector("#sukses div").remove();
  }, 3000);

  // render Data
  getUsers();
}

export { getData, deleteData, tambahData, updateData };
