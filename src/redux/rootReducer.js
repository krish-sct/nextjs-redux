import { combineReducers } from "@reduxjs/toolkit";
import testimonialReducer from "./slices/testimonialSlice";
import articleReducer from "./slices/articleSlice";
import careerReducer from "./slices/careerSlice";
import newsReducer from "./slices/newsSlice";
import newsLetterReducer from "./slices/newsLetterSlice";
import pressReleaseReducer from "./slices/pressReleaseSlice";
import podcastReducer from "./slices/podcastSlice";
import eventTradeShowsReducer from "./slices/eventTradeShowsSlice";
import faqReducer from "./slices/faqSlice";
import contactusReducer from "./slices/contactUsSlice";
import masterReducer from "./slices/masterSlice";
import videoReducer from "./slices/videoSlice";

const rootReducer = combineReducers({
  testimonialData: testimonialReducer,
  articleData: articleReducer,
  careerData: careerReducer,
  newsData: newsReducer,
  newsLetterData: newsLetterReducer,
  pressReleaseData: pressReleaseReducer,
  podcastData: podcastReducer,
  eventTradeShowsData: eventTradeShowsReducer,
  faqData: faqReducer,
  videoInfo: videoReducer,
  contactusData: contactusReducer,
  masterData: masterReducer,
});

export default rootReducer;
