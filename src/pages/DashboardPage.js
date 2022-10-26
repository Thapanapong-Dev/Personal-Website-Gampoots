import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/service/pageSlice";
import { Container, Row, Col } from "react-bootstrap";

import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { useLocation } from "react-router-dom";
import { ProjectForm } from "../components/ProjectForm";
import { AllProject } from "../components/AllProject";

export default function DashboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage("dashboard"));
  });
  return (
    <section className="form">
      <Container>
        <Row>
          <Col size={12} md={5}>
            <ProjectForm />
          </Col>
          <Col size={12} md={7}>
            <AllProject />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
