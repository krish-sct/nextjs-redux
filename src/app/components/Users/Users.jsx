'use client'
import React from 'react'
import { useSelector } from "react-redux";

const Users = () => {
    const users = useSelector((state) => state.userInfo.users)
    console.log({ users });
    return (
        <div>Users</div>
    )
}

export default Users