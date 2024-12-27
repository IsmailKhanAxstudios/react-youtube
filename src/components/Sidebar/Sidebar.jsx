import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const menuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!menuOpen) return null;
  return (
    <div className="shadow-lg p-2 px-4 w-48">
      <div className="mb-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">Home</h1>
        </Link>

        <ul>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Shorts</li>
        </ul>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-xl">Subscriptions</h1>
        <ul>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Shorts</li>
        </ul>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-xl">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
