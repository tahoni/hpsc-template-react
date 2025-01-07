import React, { ReactElement } from "react";
import { Example } from "./Example.tsx";

export const ExamplePost = React.memo((): ReactElement => {
  return <Example />;
});
