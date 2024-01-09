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

export const getTestimonialById = async (testimonialId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/testimonials?id=${testimonialId}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error(`Failed to fetch testimonial:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getTestimonialById:", error.message);
    throw error;
  }
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

export const getArticleById = async (articleId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/articles?id=${articleId}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error(`Failed to fetch article:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getArticleById:", error.message);
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

export const getCareerById = async (careerId) => {
  try {
    const response = await fetch(`${configs.baseURL}/careers?id=${careerId}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch career:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getCareerById:", error.message);
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

export const getNewsById = async (newsId) => {
  try {
    const response = await fetch(`${configs.baseURL}/news?id=${newsId}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Failed to fetch news:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNewsById:", error.message);
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

export const getNewsLetterById = async (newsLetterId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/newsLetters?id=${newsLetterId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch newsLetter:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNewsLetterById:", error.message);
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

export const getPressReleasesById = async (pressReleasesId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/pressReleases?id=${pressReleasesId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch pressReleases:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPressReleasesById:", error.message);
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

export const getPodcastById = async (podcastsId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/podcasts?id=${podcastsId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch podcasts:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPodcastsById:", error.message);
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

export const getEventTradeShowsById = async (eventTradeShowsId) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/eventTradeShows?id=${eventTradeShowsId}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error(`Failed to fetch eventTradeShows:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getEventTradeShowsById:", error.message);
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

export const getFaqById = async (faqsId) => {
  try {
    const response = await fetch(`${configs.baseURL}/faqs?id=${faqsId}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch faqs:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getFaqId:", error.message);
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
