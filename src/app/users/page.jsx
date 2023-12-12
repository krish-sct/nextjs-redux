import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Users from "../components/Users/Users";
export const metadata = {
  title: "Users",
  description: "Data Systems",
};
const UsersPage = () => {

  return <div>
    <h1>Users Page</h1>
    <Users />
  </div>;
};

export default UsersPage;
