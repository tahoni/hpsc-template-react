import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Content } from "../Content/Content.tsx";
import classes from "./Body.module.scss";

export const Body = React.memo((): ReactElement => {
  return (
    <div className={classes.body}>
      <div className={classes.bodyInner}>
        <div className={classes.bodyCenter}>
          <Container>
            <Content />
          </Container>
        </div>
      </div>
    </div>
  );
});
