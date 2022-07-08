import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routesArray } from "../constants";

const RoutesMapping: React.FC = () => {
  const mapRoutes = (): Array<JSX.Element> => {
    return routesArray.map((route: any, key) => (
      <Route key={key} path={route.path} element={<route.component />} />
    ));
  };

  return (
    <Router>
      <Routes>{mapRoutes()}</Routes>
    </Router>
  );
};

export { RoutesMapping };
