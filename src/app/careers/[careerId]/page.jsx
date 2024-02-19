"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TemplatePreview from "../../components/TemplatePreview";
import {
  fetchCareerById,
  fetchCareer,
} from "../../../redux/slices/careerSlice";
import Breadcrumb from "../../components/Breadcrumb";
import RelatedComponent from "../../components/relatedComponent/RelatedComponent";
import Error from "../../error";

const CareerDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const career = useSelector((state) => state?.careerData?.careers?.careers);

  const careers = useSelector((state) => state?.careerData?.careers?.careers);

  const careerPageDetails = useSelector(
    (state) => state?.careerData?.careers?.careerDetails?.career?.components
  );

  let title = career
    ?.filter((e) => e?._id === params?.careerId)[0]
    ?.components?.find((e) => e.key === "header")?.value;

  const createdAt = career?.filter((e) => e?._id === params?.careerId)[0]
    ?.createdAt;

  const [careerDetails, setCareerDetails] = useState([]);

  const handleCareerDetails = () => {
    let data = career?.filter((e) => e?._id === params?.careerId)[0];
    setCareerDetails(data?.components || []);
  };

  const getDetailsById = () => {
    dispatch(fetchCareerById(params.careerId));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCareer())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching careers", error);
        <Error />;
        setIsLoading(false);
      });
  }, [dispatch]);

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
      <Breadcrumb title={title} dataTemplate={"careers"} />

      <div className="list-container">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="content-margin">
              <TemplatePreview
                templateData={careerDetails}
                title={title}
                createdAt={createdAt}
              />
            </div>
            <div className="custom-margin">
              <RelatedComponent data={careers} dataTemplate={"careers"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerDetails;
