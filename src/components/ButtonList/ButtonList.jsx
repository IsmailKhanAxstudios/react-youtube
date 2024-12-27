import React from "react";
import Button from "../Button/Button";

const list = [
  "Podcast",
  "Bitcoin",
  "Goals",
  "Music",
  "Live",
  "Mixes",
  "Strategise",
  "Gaming",

  "Bitcoin",
  "Goals",
  "Music",
  "Live",
];
const ButtonList = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 p-2 mt-2 w-full overflow-x-auto">
        {list.map((e) => {
          return <Button text={e} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
