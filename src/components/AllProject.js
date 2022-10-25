import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const AllProject = () => {
  return (
    <Card className="all-project">
      <Card.Header>Project name</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          <div>
            <h6>Date</h6>
            <div>28/06/2000</div>
          </div>
          <div>
            <h6>Languages & Frameworks</h6>
            <div>React.js | MongoDB | Node.js</div>
          </div>
          <div>
            <h6>Picture Files</h6>
            <div>Download_1 | Download_2 | Download_3</div>
          </div>
          <div>
            <h6>Links</h6>
            <div>Github.logo | Youtube.logo</div>
          </div>
          <div>
            <h6>Priority</h6>
            <div>Highest</div>
          </div>
          <div>
            <h6>Description</h6>
            <div>Description.logo.modal</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
