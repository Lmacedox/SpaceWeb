import { HomePage } from "../pages/index";

import { Routers } from "../models/index";

const paths = {
  home: () => "/",
};

const routes = [
  {
    path: paths.home(),
    component: HomePage,
  },
] as Routers[];

export { paths, routes as default };
