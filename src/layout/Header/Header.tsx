import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderContent } from "./HeaderContent.tsx";
import classes from "./Header.module.scss";

export const Header = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.header}>
      <Row className={classes.headerInner}>
        <Col className={classes.headerCenter}>
          <HeaderContent title="" />
        </Col>
      </Row>
    </Container>
  );
});
