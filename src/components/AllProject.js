import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const AllProject = () => {
  return (
    <Card className="all-project">
      <Card.Header>Project name</Card.Header>
      <Card.Body>
        <h6>Date</h6>
        <div>28/06/2000</div>

        <h6>Languages & Frameworks</h6>
        <div>React.js | MongoDB | Node.js</div>

        <h6>Picture Files</h6>
        <div>Download_1 | Download_2 | Download_3</div>

        <h6>Links</h6>
        <div>Github.logo | Youtube.logo</div>

        <h6>Priority</h6>

        <h6>Description</h6>
        <div>Description.logo.modal</div>
      </Card.Body>
    </Card>
  );
};
