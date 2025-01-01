import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import liveChatReducer from "./liveChatSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    livechat: liveChatReducer,
  },
});

export default store;
