"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import { fetchCareerById } from "../../../redux/slices/careerSlice";

const CareerDetails = ({ params }) => {
  const dispatch = useDispatch();
  const career = useSelector((state) => state?.careerData?.careers?.careers);

  const careerPageDetails = useSelector(
    (state) => state?.careerData?.careers?.careerDetails?.career?.components
  );

  const [careerDetails, setCareerDetails] = useState([]);
  const handleCareerDetails = () => {
    let data = career?.filter((e) => e?._id === params?.careerId)[0];
    setCareerDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchCareerById(params.careerId));
  };

  useEffect(() => {
    if (career?.length && params) {
      handleCareerDetails();
      getDetailsById();
    }
  }, [career]);

  useEffect(() => {
    if (careerPageDetails?.length) {
      setCareerDetails(careerPageDetails || []);
    }
  }, [careerPageDetails]);

  return (
    <div>
      <h1>Careers</h1>
      <TemplatePreview templateData={careerDetails} title={"Career"} />
    </div>
  );
};

export default CareerDetails;
