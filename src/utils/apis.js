import configs from "./configs";
let defaultPage = 1;
let defaultLimit = 10;
const templateData = "articles";
let id = "659bbfc0bf7615183f7c0b21";

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

//Videos
export const getVideosUrl = async (page, limit) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/videos?page=${page || defaultPage}&limit=${
        limit || defaultLimit
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(`Failed to fatch videos:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getvideo", error.message);
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

//careersConfig
export const getArticlesConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/articlesConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch articleConfigs:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getArticlesConfig:", error.message);
    throw error;
  }
};

//careersConfig
export const getCareersConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/careersConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch careersConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getCareersConfig:", error.message);
    throw error;
  }
};

//faqsConfig
export const getFaqsConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/faqsConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch faqsConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getFaqsConfig:", error.message);
    throw error;
  }
};

//testimonialsConfig
export const getTestimonialsConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/testimonialsConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch testimonialsConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getTestimonialsConfig:", error.message);
    throw error;
  }
};
//eventTradeShowsConfig
export const getEventTradeShowsConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/eventTradeShowsConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch eventTradeShowsConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getEventTradeShowsConfig:", error.message);
    throw error;
  }
};
//newsConfig
export const getNewsConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/newsConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch newsConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNewsConfig:", error.message);
    throw error;
  }
};
//newsLettersConfig
export const getNewsLettersConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/newsLettersConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch newsLettersConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getNewsLettersConfig:", error.message);
    throw error;
  }
};
//podcastsConfig
export const getPodcastsConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/podcastsConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch podcastsConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPodcastsConfig:", error.message);
    throw error;
  }
};
//pressReleasesConfig
export const getPressReleasesConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/pressReleasesConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch pressReleasesConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getPressReleasesConfig:", error.message);
    throw error;
  }
};
//videosConfig
export const getVideosConfig = async () => {
  try {
    const response = await fetch(`${configs.baseURL}/videosConfig`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch videosConfig:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getVideosConfig:", error.message);
    throw error;
  }
};

//dynamicTemplatePreview
export const getDynamicTemplatePreview = async (templateData, id) => {
  try {
    const response = await fetch(
      `${configs.baseURL}/${templateData}?id=${id}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error(
        `Failed to fetch preview data from ${templateData}:${response.status}`
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error", error.message);
    throw error;
  }
};

export const updateTemplateStaging = async ({ data, templateData }) => {
  try {
    const response = await fetch(`${configs.baseURL}/${templateData}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `Failed to fetch preview data from ${templateData}:${response.status}`
      );
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    console.error("Error", error.message);
    throw error;
  }
};
