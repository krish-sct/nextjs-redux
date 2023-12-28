import React from "react";
import Select from "react-select";

const CountryDropdown = ({ onChange, value }) => {
  const countryOptions = [
    {
      label: "select a country",
      value: "",
    },
  ];
  return (
    <Select
      options={countryOptions}
      onChange={onChange}
      value={countryOptions.find((option) => option.value === value)}
    />
  );
};

export default CountryDropdown;
