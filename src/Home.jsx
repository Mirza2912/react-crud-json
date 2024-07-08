import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  //   state for storing tha data of json server
  const [data, setData] = useState([]);

  //   const navigate = useNavigate();
  // fetching data from json server
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(data);

  //   const deleteUSer = (id) =>
  const deleteUSer = (id) => {
    const confirm = window.confirm("Would you like to delete...?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className=" pb-5 flex flex-col items-center bg-gray-100 h-[100vh]">
        <h2 className="text-3xl uppercase my-5 font-bold text-center">
          Todo(CRUD) with react and json server
        </h2>
        <div className="w-[50%] ">
          <Link
            to="/CreateUser"
            className="px-5 mt-5 py-1.5 bg-green-600 text-white rounded float-right"
          >
            Create User
          </Link>
        </div>
        <div className="w-[70%] shadow-lg p-5 bg-white mt-5">
          <table className="border border-gray-300 min-w-full text-center">
            <thead>
              <tr className="font-semibold border border-gray-400 ">
                {/* <td className="py-1">ID</td> */}
                <td className="py-1">Name</td>
                <td className="py-1">Phone</td>
                <td className="py-1">Email</td>
                <td className="py-1">Function</td>
              </tr>
            </thead>

            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    {/* <td className="py-4">{user.id}</td> */}
                    <td className="py-4">{user.name}</td>
                    <td className="py-4">{user.phone}</td>
                    <td className="py-4">{user.email}</td>
                    <td className="py-4">
                      <Link
                        to={`/ReadUser/${user.id}`}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded mx-1"
                      >
                        read
                      </Link>
                      <Link
                        to={`/UpdateUser/${user.id}`}
                        className="px-3 py-1.5 bg-gray-300 rounded mx-1"
                      >
                        update
                      </Link>
                      <button
                        onClick={(e) => deleteUSer(user.id)}
                        className="px-3 py-1.5 bg-red-600 text-white rounded mx-1"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
