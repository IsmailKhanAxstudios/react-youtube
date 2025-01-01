import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "Live chat",
  initialState: {
    chatList: [
      {
        name: "John",
        message: "Hello everyone! HOHO",
        imgUrl: "",
      },
    ],
  },
  reducers: {
    addChat: (state, action) => {
      state.chatList.splice(100, 1);
      state.chatList.unshift(action.payload);
    },
  },
});

export const { addChat, removeChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
