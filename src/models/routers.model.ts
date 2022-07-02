import React from "react";

export interface Routers {
  path: string;
  pathMatch: RegExp;
  component: () => JSX.Element | React.FunctionComponent<any>;
  title: string;
  backTo?: string;
}
