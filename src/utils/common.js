export const handleDate = (date) => {
  let data = new Date(date);
  return data.toLocaleString();
};

export const handleCase = (templateData) => {
  if (templateData.toLowerCase() === "news") {
    return templateData?.concat("es");
  } else {
    return templateData?.slice(0, -1);
  }
};
