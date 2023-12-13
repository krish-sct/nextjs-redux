import configs from "./configs";
export const getTestimonials = async (page, limit) => {
  const response = await fetch(
    `${configs.baseURL}/testimonials?page=${page || 1}&limit=${limit || 5}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
};
export const addTestimonial = async (data) => {
  const res = await fetch(`${configs.baseURL}/testimonials`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const deleteTestimonial = async (id) => {
  const res = await fetch(`${configs.baseURL}/testimonials?id=${id}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
export const getUsers = async (page, limit) => {
  const response = await fetch(
    `${configs.baseURL}/users?page=${page || 1}&limit=${limit || 5}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
};
