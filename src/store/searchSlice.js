import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {},
    onClickTxt: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchCache = Object.assign(state.searchCache, action.payload);
    },
    setOnClickTxt: (state, action) => {
      state.onClickTxt = action.payload;
    },
  },
});

export const { setSearch, setOnClickTxt } = searchSlice.actions;
export default searchSlice.reducer;
