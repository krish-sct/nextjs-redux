import configs from "./configs";
let defaultPage = 1;
let defaultLimit = 10;
//Testimonial
export const getTestimonials = async (page, limit) => {
  const response = await fetch(
    `${configs.baseURL}/testimonials?page=${page || defaultPage}&limit=${
      limit || defaultLimit
    }`,
    {
      cache: "no-store",
    }
  );
  return response.json();
};

//Article
export const getArticles = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/articles?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch articles: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getArticles:", error.message);
    throw error;
  }
};

//Career

export const getCareers = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/careers?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch careers: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getCareers:", error.message);
    throw error;
  }
};

//News

export const getNews = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/news?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch news: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNews:", error.message);
    throw error;
  }
};

//NewsLetter

export const getNewsLetters = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/newsLetters?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch newsLetter: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNewsLetters:", error.message);
    throw error;
  }
};

//PressRelease

export const getPressReleases = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/pressReleases?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch PressRelease: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPressRelease:", error.message);
    throw error;
  }
};

//Podcasts

export const getPodcasts = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/podcasts?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch Podcasts: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPodcasts:", error.message);
    throw error;
  }
};

//EventTradeShows
export const getEventTradeShows = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/eventTradeShows?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch eventTradeShows : ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getEventTradeShows:", error.message);
    throw error;
  }
};

//Faq
export const getFaqs = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/faqs?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch faqs: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getFaqs:", error.message);
    throw error;
  }
};

//ContactUs

export const addContactForm = async (data) => {
  console.log({ data });
  const response = await fetch(`${configs.baseURL}/contactus`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //console.log(response);
  return response.json();
};

//master
export const getMaster = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/master`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch master: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getMaster:", error.message);
    throw error;
  }
};

export const addMaster = async (data) => {
  const res = await fetch(`${configs.baseURL}/master`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
