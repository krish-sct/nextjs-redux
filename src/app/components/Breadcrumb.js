"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchDynamicTemplatePreview } from "../../redux/slices/dynamicTemplatePreview";
import { useDispatch } from "react-redux";

const Breadcrumb = ({ title, template }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { templates, setTemplates } = useState(null);

  const fetchData = () => {
    dispatch(fetchDynamicTemplatePreview());
  };

  useEffect(() => {
    // fetchData()
    const routetitle = router;
    // console.log(routetitle);
  }, [router]);

  return (
    <div className="breadcrumb">
      <Link href="/">Home</Link>
      <span className="breadcrumb-separator">{" > "}</span>
      <Link href={`/${template}`}>{template}</Link>
      <span className="breadcrumb-separator">{" > "}</span>
      <div>{title}</div>
    </div>
  );
};

export default Breadcrumb;
