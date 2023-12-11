import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <Link href="/">
          <h3>Data Systems</h3>
        </Link>
        <ul>
          <Link href="/add">Add User</Link>
          <Link href="/users">User</Link>
          <Link href="/about">About</Link>
          <Link href="/add">Add User</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
