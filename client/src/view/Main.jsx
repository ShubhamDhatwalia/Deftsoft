import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="flex justify-around pt-10 text-2xl items-center">
      <Link to="/admin">Admin</Link>
      <Link to="/tl">Tech Lead</Link>
      <Link to="/pm">Project Manager</Link>
      <Link to="/employee">Emplyee</Link>
    </div>
  );
};

export default Main;
