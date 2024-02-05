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

export const handleDateString = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
  // .toDateString();
};
