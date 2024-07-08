import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // state for storing a new data in state to add in json server
  const [newUser, setNewUser] = useState({
    // id: "",
    name: "",
    phone: "",
    email: "",
  });
  // console.log(newUser);

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className=" pb-5 flex flex-col items-center bg-gray-100 h-[100vh]">
        <h2 className="text-3xl uppercase my-5 font-bold text-center">
          Create new User
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="w-[30%] p-5 flex flex-col border my-3 shadow-lg bg-white"
        >
          {/* <label htmlFor="number" className="text-lg font-semibold my-1">
            Id :
          </label>
          <input
            type="number"
            value={parseInt}
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Id"
            // onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
          /> */}
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Name :
          </label>
          <input
            type="text"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Name"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Phone :
          </label>
          <input
            type="number"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Phone"
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Email :
          </label>
          <input
            type="email"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button className="px-10 py-1.5 bg-green-600 text-white rounded mt-5">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
