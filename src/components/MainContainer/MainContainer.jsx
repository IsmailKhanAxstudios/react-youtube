import React from "react";
import ButtonList from "../ButtonList/ButtonList";
import VideoContainer from "../VideoContainer/VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full overflow-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
