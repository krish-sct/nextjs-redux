"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import CountryList from "react-select-country-list";

const CountryLists = ({ onChange, value }) => {
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const options = CountryList().getData();
    setCountryOptions(options);
  }, []);
  return (
    <Select
      options={countryOptions}
      onChange={onChange}
      value={countryOptions.find((option) => option.value === value)}
    />
  );
};

export default CountryLists;
