import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ReadUser() {
  // state for storing specific datra of id
  const [data, setData] = useState([]);

  const { id } = useParams();
  // fetching data from json server
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(parseInt(data.id));
  return (
    <>
      <div className="w-[100%] flex flex-col items-center h-[100vh] justify-center bg-gray-100">
        <div className="w-[30%] p-5 flex flex-col  my-3 shadow-lg bg-white">
          <h2 className="text-4xl font-semibold text-center my-5">
            User Details
          </h2>
          <h2 className="text-lg font-semibold">
            Id : <span className="text-lg font-normal">{data.id}</span>
          </h2>
          <h2 className="text-lg font-semibold">
            Name : <span className="text-lg font-normal">{data.name}</span>
          </h2>
          <h2 className="text-lg font-semibold">
            Phone : <span className="text-lg font-normal">{data.phone}</span>
          </h2>
          <h2 className="text-lg font-semibold">
            Email : <span className="text-lg font-normal">{data.email}</span>
          </h2>
          <div className="flex items-center my-5">
            <Link
              to={`/UpdateUser/${id}`}
              className="px-3 py-1.5 bg-gray-300 rounded mx-1"
            >
              update
            </Link>
            <Link to={`/`} className="px-3 py-1.5 bg-green-600 rounded mx-1">
              back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadUser;
