import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectForm = () => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const currDate = curr.toISOString().substring(0, 10);
  const formInitialDetails = {
    projectName: "",
    date: currDate,
    description: "",
    tools: "",
    pictureFiles: "",
    projectLink: "",
    videoLink: "",
    priority: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

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
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="form">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.projectName}
                          placeholder="Project Name"
                          onChange={(e) =>
                            onFormUpdate("projectName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="date"
                          value={formDetails.date}
                          placeholder="Date"
                          min={"2000-06-28"}
                          max={currDate}
                          onChange={(e) => onFormUpdate("date", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.tools}
                          placeholder="Tools"
                          onChange={(e) =>
                            onFormUpdate("projectName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="file"
                          multiple="multiple"
                          placeholder="Picture Files"
                          value={formDetails.pictureFiles}
                          onChange={(e) =>
                            onFormUpdate("pictureFiles", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.projectLink}
                          placeholder="Project Link"
                          onChange={(e) =>
                            onFormUpdate("projectLink", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.videoLink}
                          placeholder="Video Link"
                          onChange={(e) =>
                            onFormUpdate("videoLink", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.priority}
                          placeholder="Priority"
                          onChange={(e) =>
                            onFormUpdate("priority", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.description}
                          placeholder="Description"
                          onChange={(e) =>
                            onFormUpdate("description", e.target.value)
                          }
                        ></textarea>
                      </Col>
                      <Col size={12} className="px-1">
                        <button className="form-submit" type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
