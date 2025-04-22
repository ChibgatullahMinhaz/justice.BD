import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routers from "./Routes/Router";
import LawyerDataProvider from "./Context/LawyerDataProvider/LawyerDataProvider";
import LoaderProvider from "./Context/LoaderProvider/LoaderProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <LoaderProvider>
  <LawyerDataProvider>
      <RouterProvider router={routers}></RouterProvider>
    </LawyerDataProvider>
  </LoaderProvider>
  </StrictMode>
);
