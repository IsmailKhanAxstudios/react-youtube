import React from "react";
import { commentsData } from "../../constants/global";

const CommentRow = ({ name, comment }) => {
  return (
    <div className="flex gap-4">
      <div className="w-18 h-18 bg-slate-500 rounded-full" />
      <div className="flex flex-col ml-4">
        <h1>{name}</h1>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((e) => {
    return (
      <div className="ml-4 border-l-2">
        <CommentRow name={e?.name} comment={e?.comment} />
        <CommentsList comments={e?.replies} />
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
