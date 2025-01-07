import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterContent } from "./FooterContent.tsx";
import classes from "./Footer.module.scss";

export const Footer = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.footer}>
      <Row className={classes.footerInner}>
        <Col className={classes.footerCenter}>
          <FooterContent />
        </Col>
      </Row>
    </Container>
  );
});
