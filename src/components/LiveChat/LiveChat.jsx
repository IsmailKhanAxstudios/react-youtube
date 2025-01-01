import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/liveChatSlice";
import { generateRandomYouTubeChatMessage } from "../../constants/global";
const CommentRow = ({ chat }) => {
  const { name, message, imgUrl } = chat;

  return (
    <div className="border-b-2 w-[100%] py-1">
      <div className="flex gap-2">
        <img src={imgUrl} alt="User Profile" className="h-6 w-6 rounded-full" />

        <h5 className="font-bold basis[30%]">{name}</h5>
      </div>
      <p> {message}</p>
    </div>
  );
};
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatData = useSelector((state) => state.livechat.chatList);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(async () => {
      const data = await getUserNameandPhoto();

      dispatch(
        addChat({
          ...data,
          message: generateRandomYouTubeChatMessage(),
        })
      );
    }, 3000);
    return () => {
      return clearInterval(timer);
    };
  }, []);

  const getUserNameandPhoto = async () => {
    const data = await fetch("https://randomuser.me/api/");
    const response = await data.json();
    const { name, picture } = response?.results[0];
    const fullName = `${name?.first}  ${name?.last}`;
    console.log({ name: fullName, imgUrl: picture?.medium });
    return { name: fullName, imgUrl: picture?.medium };
  };

  return (
    <div className="w-full border p-4">
      <h1>Live Chat</h1>
      <div className="flex flex-col-reverse  overflow-x-auto h-[400px]">
        {chatData.map((e) => {
          return <CommentRow chat={e} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e?.preventDefault();
          console.log(liveMessage);
          dispatch(addChat({ message: liveMessage, name: "Parvej Shaikh" }));
          setLiveMessage("");
        }}
      >
        <div className="h-8 rounder-lg flex gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter Message"
            className="basis-[80%] border-[1px] px-2"
            onChange={(e) => {
              setLiveMessage(e?.target?.value);
            }}
            value={liveMessage}
          ></input>
          <button
            type="submit"
            className=" bg-sky-600 p-2 rounded-lg flex justify-center items-center"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
