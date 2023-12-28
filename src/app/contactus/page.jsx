'use client'
import React,{useState,useEffect} from "react";
import { addContactForm } from "../../utils/apis";
import styles from './contactus.module.css'
import { CountrySelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";


const Contactus= () => {
  const [formValues, setFormValues] = useState({
    name: "",
    companyName: "",
    email: "",
    contactNo: "",
    country: "",
    captcha: "",
    hearAboutUs: "",
    queries: ""
  });
  

  const generateRandomCaptcha = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    return captcha;
  };
  const formData=[
      {
       name:'name',
       placeholder:'Name*',
       type:'text',
       value:'',
       className:''
      },
     {
      name:'companyName',
      placeholder:'Company Name*',
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
      },
      {
        name:'contactNo',
        placeholder:'Contact Number',
        type:'text',
        value:'',
        className:''
      },
      {
        name:'country',
        placeholder:'Country',
        type:'select',
        value:'',
        className:''
      },
      {
        name:'captcha',
        placeholder:'captcha',
        type:'text',
        value:formValues.captcha,
        className:''
      },
      {
        name:'hearAboutUs',
        placeholder:'How did you hear about us?',
        type:'text',
        value:'',
        className:''
      },
      {
        name:'queries',
        placeholder:'Describe your queries',
        type:'text',
        value:'',
        className:''
      },
      
  ]



   useEffect(() => {
     setFormValues({
      ...formValues,
       captcha: generateRandomCaptcha(6)
      });
   }, []);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const countryName = formValues.country ? formValues.country.name : "";
    const formDataWithCountryName = { ...formValues, country: countryName };
    const res=await addContactForm(formDataWithCountryName)
    if(res?.status===200){
      setFormValues({
        name: "",
        companyName:"",
        email: "",
        contactNo: "",
        country:"",
        captcha:generateRandomCaptcha(6),
        hearAboutUs:"",
        queries:""
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
          {field.type === 'select' && field.name === 'country' ? (
            <div className={styles.dropdownstyles}>
            <CountrySelect
              name={field.name}
              placeholder={field.placeholder}
              value={formValues.country || ''}
              className={field.className}
              onChange={(e)=>{
                setFormValues((prev)=>({...prev,country:e}))
              }}
            >
            </CountrySelect>
            </div>
          ) : (
            <>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name] || ''}
              className={field.className}
              onChange={handleChange}
            />
             {field.name === 'captcha' && (
                  <p className={styles.captcha}>{formValues.captcha}</p>
                )}
            </>
          )}
        </div>
      ))}
       <button type="submit" className="p-2 rounded my-5 bg-green-400 font-bold hover:border-l-green-100" >Submit</button>
    </form>
    </div>
  )
  
};

export default Contactus;