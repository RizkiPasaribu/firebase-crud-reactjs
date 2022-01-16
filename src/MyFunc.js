import { db } from "./firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

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

// getUser
const getData = async () => {
  const data = await getDocs(collection(db, "users"));

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { getData, deleteData };
