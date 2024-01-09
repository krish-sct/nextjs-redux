"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";

const CareerDetails = ({ params }) => {
  const career = useSelector((state) => state?.careerData?.careers?.careers);

  const [careerDetails, setCareerDetails] = useState([]);
  const handleCareerDetails = () => {
    let data = career?.filter((e) => e?._id === params?.careerId)[0];
    setCareerDetails(data?.components || []);
  };

  useEffect(() => {
    if (career?.length) {
      handleCareerDetails();
    }
  }, [career]);

  return (
    <div>
      <h1>Careers</h1>
      <TemplatePreview templateData={careerDetails} />
    </div>
  );
};

export default CareerDetails;
