import React from "react";
import { Col, Row } from "react-bootstrap";
import { HomeContent } from "../../content/pages";

export const HomePage = React.memo(() => {
  return (
    <Row>
      <Col>
        <HomeContent />
      </Col>
    </Row>
  );
});
