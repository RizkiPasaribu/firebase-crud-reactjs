import { useEffect, useState } from "react";
// import { db } from "./firebase-config";
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

// components
import { ModalInput } from "./components/ModalInput";

// myfunc
import { getData, deleteData } from "./MyFunc";

function App() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  // const [update, setUpdate] = useState("");

  const getUsers = () => {
    const data = getData();
    data.then((users) => setUsers(users));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-10 px-4 mx-auto">
      <h1 className="text-center text-5xl font-bold">
        Firebase CRUD Sederhana Ala Rizki
      </h1>
      {/* Tombol Tambah Data */}
      <div className="mt-10" id="sukses">
        <button
          onClick={() => setModal(true)}
          className="bg-green-500 px-2 rounded-md hover:opacity-80 h-1/2 text-white "
        >
          Tambah Data
        </button>
      </div>
      {/* Tampilan Data Dalam Bentuk Tabel */}
      <div className="mt-2 mx-auto p-4 bg-slate-300 rounded-md mb-5">
        <table className="border-collapse border border-gray-400 mx-auto table-fixed w-full">
          <thead>
            <tr>
              <th className="border-2 border-white p-2 w-1/5">No</th>
              <th className="border-2 border-white p-2">Nama</th>
              <th className="border-2 border-white p-2">Umur</th>
              <th className="border-2 border-white p-2 w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index} className="text-center">
                  <td className="border-2 border-white p-3 w-1/5">
                    {index + 1}
                  </td>
                  <td className="border-2 border-white p-3 text-left">
                    {user.Nama}
                  </td>
                  <td className="border-2 border-white p-3">{user.Umur}</td>
                  <td className="border-2 border-white p-3 w-1/5">
                    <button
                      onClick={() => {
                        setModal([true, user]);
                      }}
                      className="bg-orange-500 px-2 rounded-md hover:opacity-80 h-1/2 text-white mx-2 "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(user.id, getUsers)}
                      className="bg-red-500 px-2 rounded-md hover:opacity-80 h-1/2 text-white mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ModalInput modal={modal} setModal={setModal} getUsers={getUsers} />
    </div>
  );
}

export default App;
