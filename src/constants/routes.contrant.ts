import { HomePage } from "../pages/index";

import { Routers } from "../models/Routers.model";

const paths = {
  home: () => "/",
};

const routes = [
  {
    path: paths.home(),
    component: HomePage,
    title: "Initial Page - Home",
  },
] as Routers[];

export { paths, routes as default };
