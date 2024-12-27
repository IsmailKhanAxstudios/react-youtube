import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContainer from "../MainContainer/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import WatchContainer from "../WatchContainer/WatchContainer";
const BodyLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchContainer />,
      },
    ],
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
