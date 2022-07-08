import React from "react";

export interface Routers {
  path: string;
  component: JSX.Element | React.FunctionComponent<any>;
}
