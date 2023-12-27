const { configureStore } = require("@reduxjs/toolkit");
import testimonialReducer from "./slices/testimonialSlice";
import articleReducer from "./slices/articleSlice";
import templateReducer from "./slices/templateSlice";
import careerReducer from "./slices/careerSlice";
import newsReducer from "./slices/newsSlice";
import newsLetterReducer from "./slices/newsLetterSlice";
import pressReleaseReducer from "./slices/pressReleaseSlice";
import podcastReducer from "./slices/podcastSlice";
import eventTradeShowsReducer from "./slices/eventTradeShowsSlice";
import faqReducer from "./slices/faqSlice";

const store = configureStore({
  reducer: {
    testimonialData: testimonialReducer,
    articleData: articleReducer,
    templateData: templateReducer,
    careerData: careerReducer,
    newsData: newsReducer,
    newsLetterData: newsLetterReducer,
    pressReleaseData: pressReleaseReducer,
    podcastData: podcastReducer,
    eventTradeShowsData: eventTradeShowsReducer,
    faqData: faqReducer,
  },
});
export default store;
