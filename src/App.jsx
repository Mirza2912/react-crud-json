import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import ReadUser from "./ReadUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        <Route path="/ReadUser/:id" element={<ReadUser />} />
      </Routes>
    </Router>
  );
}

export default App;
