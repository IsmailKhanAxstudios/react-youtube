import React from "react";

function timeDifference(dateStr) {
  const inputDate = new Date(dateStr);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate - inputDate;

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Rough estimate
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}

const formatViewCount = (count) => {
  if (count >= 1e9) {
    return (count / 1e9).toFixed(1) + "B"; // Billion
  } else if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + "M"; // Million
  } else if (count >= 1e3) {
    return (count / 1e3).toFixed(1) + "K"; // Thousand
  } else {
    return count.toString(); // Less than 1,000, show the count as is
  }
};

const VideoCard = ({ item, isLoading = false }) => {
  const { snippet, statistics } = item;

  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  const { medium } = thumbnails;
  // const { viewCount } = statistics;

  return (
    <div className="rounded-lg shadow-lg mx-4 mb-2  border p-2 w-[300px]">
      <img src={medium.url} className="" />
      <div className="justify-between grid grid-flow-col mt-2 px-2">
        {/* <div className="rounded-full bg-slate-400 h-10 w-10 col-span-1 mr-3 "></div> */}
        <div className="">
          <h1 className="font-bold">{title}</h1>
          <p>{channelTitle}</p>
          <div className="flex gap-2 items-center">
            {/* <span>{formatViewCount(viewCount)} Views</span> */}
            <span>{timeDifference(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
