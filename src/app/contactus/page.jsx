'use client'
import React,{useState} from "react";
import { addContactForm } from "../../utils/apis";

const Contactus= () => {
  const [formInfo,setFormInfo]=useState({
    name: "",
    companyName:"",
    email: "",
    contactNo: "",
    country:"",
    captcha:"",
    hearAboutUs:"",
    queries:""
  })
  const [selectedCountry,setSelectedCountry]=useState('');

  const countries=[
    "India",
    "Europe",
    "UK",
    "North America(West)",
    "North America(East)"
  ]

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await addContactForm(formInfo)
    if(res?.status===200){
      setFormInfo({
        name: "",
        companyName:"",
        email: "",
        contactNo: "",
        country:"",
        captcha:"",
        hearAboutUs:"",
        queries:""
      })
    }else{
      console.error("Error")
    }
  }

  const handleChange=(e)=>{
    setFormInfo({...formInfo,[e.target.name]:e.target.value})
  }

  return(
    <div className="">
       <div className="border bg-violet items-center h-screen flex justify-center">
        <h1 className="text-center">Write to us</h1>
        <hr/>
        <p className="text-center">
         We are always open for your enquiries, comments and suggestions that may help us serve you in a better way. Please fill out the digital form below to communicate to us. We will respond quickly to your enquiries /comments / suggestions.
        </p>
    </div>
    
       <div className="bg-gray-300 p-8 rounded-md shadow-md ">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
         <form onSubmit={handleSubmit} className="text-center ">
          <input type="text" name="name" placeholder="Name*" onChange={handleChange} value={formInfo.name} className="w-full p-2 border rounded"/><br/>
          <input type="text" name="companyName" placeholder="Company Name*" onChange={handleChange} value={formInfo.companyName} /><br/>
          <input type="text" name="email" placeholder="Email*" onChange={handleChange} value={formInfo.email}/><br/>
          <input type="text" name="contactNo" placeholder="Contact Number" onChange={handleChange} value={formInfo.contactNo}/><br/>
          <select name="country" placeholder="" value={selectedCountry.country} onChange={(e)=>{
            setSelectedCountry(e.target.value);
            setFormInfo({ ...formInfo, country: e.target.value });
          }} >
          <option value='' disabled>USA</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
          </select>
          <br/>
        <input type="text" name="captcha" placeholder="captcha*" onChange={handleChange} value={formInfo.captcha}/><br/>
        <textarea type="text" name="hearAboutUs" placeholder="How did you hear about us?" onChange={handleChange} value={formInfo.hearAboutUs} cols={20} rows={10}/><br/>
        <input type="text" name="queries" placeholder="Describe your queries" onChange={handleChange} value={formInfo.queries}/><br/>
         <button type="submit" className="p-2 rounded my-5 bg-green-400 font-bold hover:border-l-green-100" >Submit</button>
        </form>
       </div>
    </div>
  )
  
};

export default Contactus;