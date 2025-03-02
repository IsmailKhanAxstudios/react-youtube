import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/appSlice";
import { useSearchParams } from "react-router-dom";

import CommentsContainer from "../CommentsList/CommentsList";
import LiveChat from "../LiveChat/LiveChat";

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex w-full gap-5">
      <div className="grid grid-flow-col">
        <div className="col-span-8">
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${id}`}
            title="2024 KSA Saudi Modern Driving School Computer Exam | Theory Exam | Questions &amp; Answers Saudi Dallah"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <CommentsContainer />
          </div>
        </div>
      </div>

      <LiveChat />
    </div>
  );
};

export default WatchContainer;
