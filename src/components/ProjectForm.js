import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import remove from "lodash/remove";

export const ProjectForm = () => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const currDate = curr.toISOString().substring(0, 10);
  const formInitialDetails = {
    name: "",
    date: currDate,
    description: "",
    tools: [],
    pictureLink: [],
    projectLink: "",
    videoLink: "",
    priority: "",
  };
  const [toolsList, setToolsList] = useState(
    [
      "React.js",
      "React Native",
      "Node.js",
      "Laravel",
      "Firebase",
      "MongoDB",
      "Python",
      "Java(OOP)",
      "HTML, CSS, JavaScript",
    ].sort()
  );
  const priorityList = ["Lowest", "Low", "Medium", "High", "Highest"];
  const [isDropdown, setIsDropdown] = useState(true);
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [isTools, setIsTools] = useState(true);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const removeToolsItem = (tool) => {
    remove(toolsList, (t) => t === tool);
    setToolsList(toolsList.sort());
    setIsDropdown(false);
    formDetails.tools.push(tool);
  };

  const pushToolItem = (tool) => {
    remove(formDetails.tools, (t) => t === tool);
    setFormDetails(formDetails);
    setIsTools(false);
    toolsList.push(tool);
    toolsList.sort();
  };
  const x = () => {
    console.log(toolsList);
  };

  // useEffect(() => {
  //   toolsList.sort();
  // }, [toolsList, formDetails.tools]);

  return (
    <div>
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size={12} sm={6} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.name}
              placeholder="Project Name"
              onChange={(e) => onFormUpdate("name", e.target.value)}
            />
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input
              type="date"
              className="input-field"
              value={formDetails.date}
              placeholder="Date"
              min={"2000-06-28"}
              max={currDate}
              onChange={(e) => onFormUpdate("date", e.target.value)}
            />
          </Col>
          <Col size={12} sm={12} className="px-1">
            <div className="input-field">
              <div className="d-flex justify-content-between">
                <div className="mb-2 d-inline">Languages & Frameworks</div>
                <div className="d-inline dropdown">
                  <button className="dropbtn">Choose</button>
                  <div className="dropdown-content">
                    {toolsList.map((tool, idx) =>
                      isDropdown ? (
                        <button
                          key={idx}
                          type="button"
                          className="d-block dropdown-content-item"
                          onClick={() => {
                            removeToolsItem(tool);
                          }}
                        >
                          {toolsList[idx]}
                        </button>
                      ) : (
                        setIsDropdown(true)
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                {formDetails.tools.map((tool, idx) =>
                  isTools ? (
                    <button
                      key={idx}
                      type="button"
                      className="tool-cross"
                      onClick={() => pushToolItem(tool)}
                    >
                      {tool} ✖
                    </button>
                  ) : (
                    setIsTools(true)
                  )
                )}
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.projectLink}
              placeholder="Project Link"
              onChange={(e) => onFormUpdate("projectLink", e.target.value)}
            />
          </Col>
          <Col size={12} sm={6} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.videoLink}
              placeholder="Video Link"
              onChange={(e) => onFormUpdate("videoLink", e.target.value)}
            />
          </Col>
          <Col size={12} sm={12} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.pictureLink}
              placeholder="Picture Link"
              onChange={(e) => onFormUpdate("pictureLink", e.target.value)}
            />
          </Col>
          {/* <Col size={12} sm={12} className="px-1">
                <Form.Control className="input-field" type="file" multiple />
              </Col> */}
          <Col size={12} sm={12} className="px-1">
            <div className="input-field">
              <div className="mb-2">Priority</div>
              {priorityList.map((priority) => (
                <Col key={`inline-${priority}`}>
                  <Form.Check
                    inline
                    label={priority}
                    name="priorities"
                    type="radio"
                    id={`inline-${priority}-1`}
                  />
                </Col>
              ))}
            </div>
          </Col>
          <Col size={12} sm={12} className="px-1">
            <textarea
              rows="6"
              className="input-field"
              value={formDetails.description}
              placeholder="Description"
              onChange={(e) => onFormUpdate("description", e.target.value)}
            ></textarea>
          </Col>
          <Col size={12} className="px-1">
            <button className="form-submit" type="submit">
              <span>{buttonText}</span>
            </button>
          </Col>
          {status.message && (
            <Col>
              <p className={status.success === false ? "danger" : "success"}>
                {status.message}
              </p>
            </Col>
          )}
        </Row>
      </form>
    </div>
  );
};
