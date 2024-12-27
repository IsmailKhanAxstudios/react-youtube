import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { VIDEO_LIST_API } from "../../constants/global";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_KEY, SEARCH_LIST_API } from "../../constants/global";
const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const searchTxt = useSelector((state) => state.search.onClickTxt);
  console.log(searchTxt);
  useEffect(() => {
    if (searchTxt) {
      getSelectedVideoList();
    } else {
      getVideoList();
    }
  }, [searchTxt]);

  const getVideoList = async () => {
    const data = await fetch(VIDEO_LIST_API);
    const response = await data.json();
    setVideoList(response?.items);
    console.log(data);
    return data;
  };

  const getSelectedVideoList = async () => {
    const data = await fetch(
      SEARCH_LIST_API +
        searchTxt +
        `&type=video&maxResults=10&order=relevance&key=${API_KEY}`
    );
    const response = await data.json();
    console.log(response);
    setVideoList(response?.items);
    return null;
  };
  if (!videoList)
    return (
      <div className="flex flex-wrap gap-4">
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
        <div className="w-[300px] h-56 bg-slate-200"></div>
      </div>
    );

  return (
    <div className="flex flex-wrap mr-4 px-4 py-4">
      {videoList.map((e) => {
        return (
          <Link to={`/watch?v=${e?.id}`}>
            <VideoCard item={e} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
