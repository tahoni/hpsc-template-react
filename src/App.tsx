import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Breakpoints, Layout } from "./layout";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  leftShooter,
  rightShooter,
} from "./constants/images/LayoutImageConstants.ts";
import { HomePage, PageNotFound } from "./pages";
import "./App.scss";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription = leftShooter;
  const rightSidebarImage: ImageWithSourceAndDescription = rightShooter;

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              leftSideImage={leftSidebarImage}
              rightSideImage={rightSidebarImage}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page_not_found" />} />
        </Route>
      </Routes>
      <Breakpoints />
    </>
  );
}

export default App;
