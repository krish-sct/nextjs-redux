'use client'
import React,{useState,useEffect} from "react";
import { addContactForm } from "../../utils/apis";

const Contactus= () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  
  const formData=[
      {
       name:'name',
       placeholder:'Name*',
       type:'text',
       value:'',
       className:''
      },
      {
        name:'email',
        placeholder:'Email*',
        type:'text',
        value:'',
        className:''
      }
  ]



   useEffect(() => {
     setFormValues({
      ...formValues
      });
   }, []);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await addContactForm(formValues)
    console.log("res",res);
    if(res?.status===200){
      setFormValues({
        name: "",
        email: "",
      })
    }else{
      console.error("Error")
    }
  }

  const handleChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }

  return(
    <div>
    <h1 className="text-3xl font-bold text-center">Contact</h1>
    <form onSubmit={handleSubmit} className="text-center ">
     {formData.map((field,i) => (
        <div key={i}>
        <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name] || ''}
              className={field.className}
              onChange={handleChange}
            />    
         </div>
        
        
      ))}
       <button type="submit" className="p-2 rounded my-5 bg-green-400 font-bold hover:border-l-green-100" >Submit</button>
    </form>
    </div>
  )
  
};

export default Contactus;