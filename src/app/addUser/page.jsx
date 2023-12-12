'use client'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";

const AddUser = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    jobRole: "",
    age: ""
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo((prev) => { return { ...prev, [name]: value } })
  }
  const handleAdd = () => {
    dispatch(addUser(userInfo))
    setUserInfo({
      name: "",
      email: "",
      contact: "",
      jobRole: "",
      age: ""
    })
  }
  useEffect(() => {

  }, [])

  return <div>
    <div className="">
      <div className="className">
        <div className="className">
          <h1 className="className">Add User details</h1>
          <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
          <input type="text" name="email" value={userInfo.email} onChange={handleInputChange} />
          <input type="text" name="contact" value={userInfo.contact} onChange={handleInputChange} />
          <input type="text" name="jobRole" value={userInfo.jobRole} onChange={handleInputChange} />
          <input type="number" name="age" value={userInfo.age} onChange={handleInputChange} />
          <button onClick={handleAdd}>Save</button>
        </div>
      </div>
    </div>
  </div>;
};

export default AddUser;
