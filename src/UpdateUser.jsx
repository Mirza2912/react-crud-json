import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate();
  // fetching data from json server
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, data)
      .then((res) => {
        console.log(res.data);
        alert("Your data is successfully updated");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // console.log(parseInt(data.id));
  return (
    <>
      <div className=" pb-5 flex flex-col items-center bg-gray-100 h-[100vh]">
        <h2 className="text-3xl uppercase my-5 font-bold text-center">
          Updata Your Data
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
            // required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Id"
            value={data.id}
            // onChange={(e) => setData({ ...data, id: e.target.value })}
          /> */}
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Name :
          </label>
          <input
            type="text"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Phone :
          </label>
          <input
            type="number"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter Phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <label htmlFor="number" className="text-lg font-semibold my-1">
            Email :
          </label>
          <input
            type="email"
            required
            className="p-2 border border-gray-300 rounded w-[80%]"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <div className="flex items-center my-5">
            <button
              type="submit"
              className="px-3 py-1.5 bg-gray-300 rounded mx-1"
            >
              update
            </button>
            <Link to={`/`} className="px-3 py-1.5 bg-green-600 rounded mx-1">
              back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateUser;
