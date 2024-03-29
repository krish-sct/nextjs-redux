"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addContactForm } from "../../utils/apis";
import styles from "./contactus.module.css";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useDispatch } from "react-redux";
import { fetchMaster } from "../../redux/slices/masterSlice";
import Breadcrumb from "../components/Breadcrumb";
import Error from "../error";

const ContactPage = () => {
  const dispatch = useDispatch();
  const masters = useSelector((state) => state?.masterData?.masterData);
  const [formData, setFormData] = useState([]);

  const handleFormData = () => {
    let data = masters?.filter(
      (e) => e?.type?.toLowerCase() === "contactus"
    )[0];
    setFormData(data?.formData || []);
  };

  useEffect(() => {
    dispatch(fetchMaster());
  }, []);

  useEffect(() => {
    if (masters?.length) {
      handleFormData();
    }
  }, [masters]);

  const handleChange = (e) => {
    setFormData((prev) => {
      let data = [...prev];
      return data.map((field) => {
        return field.name === e.target.name
          ? { ...field, value: e.target.value }
          : field;
      });
    });
  };

  const handleCountryChange = (selectedCountry) => {
    const countryName = selectedCountry?.label || selectedCountry;
    setFormData((prev) => {
      return prev.map((field) => {
        return field.name === "country"
          ? { ...field, value: countryName.name }
          : field;
      });
    });
  };

  const handleSubmit = async () => {
    let data = formData.map((e) => {
      return { name: e.name, value: e.value };
    });
    const res = await addContactForm({ formData: data });
    if (res?.status === 200) {
      handleFormData();
    } else {
      console.error("Error");
      <Error />;
    }
  };

  return (
    <div>
      <Breadcrumb data={"masters"} dataTemplate="contactus" />
      <div className="contactPageContainer">
        <h1 className="text-head">
          Contact Form <hr className="hr" />
        </h1>
        <div className="contactus">
          {formData?.map((field, i) => (
            <div key={i}>
              {field.type === "select" && field.name === "country" ? (
                <div className={styles.dropdownstyles}>
                  <CountrySelect
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value || ""}
                    className={field.className}
                    onChange={(selectedCountry) => {
                      handleCountryChange(selectedCountry);
                    }}
                  ></CountrySelect>
                </div>
              ) : (
                <>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value || ""}
                    className={field.className}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          ))}
          <button onClick={handleSubmit} className="contactPageButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
