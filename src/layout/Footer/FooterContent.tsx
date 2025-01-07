import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Footer.module.scss";

export const FooterContent = React.memo((): ReactElement => {
  return (
    <>
      <Row className={classes.footerContent}>
        <Col></Col>
      </Row>
    </>
  );
});
