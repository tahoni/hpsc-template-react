import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./layout";
import { HomePage, PageNotFound } from "./pages";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page_not_found" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
