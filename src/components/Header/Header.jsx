import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/appSlice";
import { SEARCH_SUGGESTON_API } from "../../constants/global";
import { useSelector } from "react-redux";
import { setSearch } from "../../store/searchSlice";
import { setOnClickTxt } from "../../store/searchSlice";
const Header = () => {
  console.log("rendered");
  const [searchTxt, setSearchTxt] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [isListOpen, setListOpen] = useState(false);

  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.search.searchCache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchItem[searchTxt]) {
        setSearchList(searchItem[searchTxt]);
      } else {
        getSearchRes();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTxt]);

  const getSearchRes = async () => {
    console.log("API CALL");
    const data = await fetch(SEARCH_SUGGESTON_API + searchTxt);
    const response = await data.json();
    setSearchList(response[1]);

    dispatch(
      setSearch({
        [searchTxt]: response[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col shadow-lg items-center p-2 justify-between">
      <div className="flex items-center col-span-1 ">
        <img
          onClick={() => {
            dispatch(toggleMenu());
          }}
          alt="hamburger"
          className="h-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAKlBMVEX///8AAAAfHx9TU1O3t7e7u7tPT08jIyPf39/b29vj4+Pm5ubp6en29vauAKIBAAAAh0lEQVR4nO3a2QmAQAxAQW/XY/tv1xYUAtmVmQ7eVwLJMAAAAAAAAAAAAAAAAAAAQEfKFOhMDDnGQEWIECFChLx0zYHuxBAAgAbVJVBNDPnN9itEiBAhQlLUNVDmQAQAaNC1Bco89Pxm+xUiRIiQvkLKHijz8QwAAAAAAAAAAAAAAAAAAD57ALshEImqBMPaAAAAAElFTkSuQmCC"
        />
        <img
          className="h-6"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
        />
      </div>

      <div className="col-span-10 flex items-center justify-center h-8">
        <input
          className="w-1/2 border border-gray-400 p-3 rounded-l-full h-full"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTxt(e?.target?.value);
            setListOpen(true);
          }}
          value={searchTxt}
        />

        <button
          className="p-3 border border-gray-400 rounded-r-full bg-gray-200 hover:cursor-pointer border-l-0 h-full flex items-center justify-center"
          onClick={() => {
            console.log(searchTxt);
            dispatch(setOnClickTxt(searchTxt));
            setListOpen(false);
          }}
        >
          <FaSearch />
        </button>
        {}
        <div
          className={`fixed border rounded-lg shadow-lg bg-white top-12 w-[40%] px-2 py-2 ${
            searchTxt && isListOpen ? "block" : "hidden"
          }`}
        >
          <ul>
            {searchList.map((e, i) => (
              <li
                key={i}
                className="py-1 px-2 hover:bg-slate-100 hover:rounded-lg cursor-pointer"
                onClick={() => {
                  dispatch(setOnClickTxt(e));
                  setListOpen(false);
                }}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img
          alt="user icon"
          className="h-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
