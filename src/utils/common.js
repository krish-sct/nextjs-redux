export const handleDate = (date) => {
  let data = new Date(date);
  return data.toLocaleString();
};

export const handleCase = (templateData, newses) => {
  if (templateData.toLowerCase() === "news") {
    //return templateData?.concat("es");
    return newses;
  } else {
    return templateData?.slice(0, -1);
  }
};
