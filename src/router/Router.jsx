import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Details from "../pages/Details";
import NotFoundPage from "../pages/NotFound";

import ROUTE_NAMES from "./routeNames";

const Router = ({ countries, setCountries }) => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.HOME}
        element={<HomePage countries={countries} setCountries={setCountries} />}
      />
      <Route path={ROUTE_NAMES.COUNTRY} element={<Details />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
