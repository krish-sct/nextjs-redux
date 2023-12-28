// const { getCode, getName } = require('country-list');

// const countryCode = 'IS';
// const countryName = 'Iceland';

// const nameFromCode = getName(countryCode);
// console.log(`Name of ${countryCode}: ${nameFromCode}`);

// const codeFromName = getCode(countryName);
// console.log(`Code of ${countryName}: ${codeFromName}`);

// const MyComponent = () => {
//   return (
//     <div>
//       <p>Name of {countryCode}: {nameFromCode}</p>
//       <p>Code of {countryName}: {codeFromName}</p>
//     </div>
//   );
// };

// export default MyComponent;




'use client'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";

  const countryPage=()=> {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const countrySelectStyles = {
      fontSize: "16px",
      color: "black",   
    };

    const dropdownstyles={
      color: "#3498db", 
      fontSize: "16px",
      width:"20rem"
    }

    return (
      <div style={dropdownstyles}>
        <h6>Country</h6>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Select Country"
          style={countrySelectStyles} 
        />
       
      </div>
    );
  }
  export default countryPage;
 {/* <h6>State</h6>
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
          }}
          placeHolder="Select State"
        />
        <h6>City</h6>
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
            console.log(e);
          }}
          placeHolder="Select City"
        /> */}