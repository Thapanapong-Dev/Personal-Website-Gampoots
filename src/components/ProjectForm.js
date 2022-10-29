import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "animate.css";
import remove from "lodash/remove";

const pictureStyle = {
  button: {
    margin: "0 0 0 0",
  },
  input: {
    height: "2rem",
    fontSize: "14px",
    padding: "0px 26px",
    margin: "0.5rem 0 0 0",
  },
};

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
  const [tools, setTools] = useState(
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

  const [validateName, setValidateName] = useState("input-field");
  const [validateTools, setValidateTools] = useState("input-field");
  const [validatePriority, setValidatePriority] = useState("input-field");
  const [validateDescription, setValidateDescription] = useState("input-field");

  const priorityList = ["Lowest", "Low", "Medium", "High", "Highest"];
  const [isDropdown, setIsDropdown] = useState(true);
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [isTools, setIsTools] = useState(false);
  const [countPic, setCountPic] = useState(0);
  const [pictureLink, setPictureLink] = useState([]);

  const uniqs = (a) =>
    a.filter((e) => a.slice(a.indexOf(e) + 1).indexOf(e) === -1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    savePictureLink();
    setButtonText("Sending...");
    validate("name", "submit");
    validate("tools", "submit");
    validate("priority", "submit");
    validate("description", "submit");

    // console.log("formDetails >>> ", formDetails);
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code === 200) {
    //   setStatus({ succes: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: "Something went wrong, please try again later.",
    //   });
    // }
  };

  const setformDefaultDetails = () => {
    setFormDetails.name("");
    setFormDetails.description("");
    setFormDetails.date("");
    setFormDetails.tools([]);
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validate = (category, activity) => {
    const validated = activity === "submit" ? "validated" : "";
    const validateValue =
      category !== "tools" ? formDetails[category] : formDetails.tools[0];
    if (validateValue === "" || validateValue === undefined) {
      switch (category) {
        case "name":
          setValidateName(`input-field ${validated}`);
          break;
        case "tools":
          setValidateTools(`input-field ${validated}`);
          break;
        case "priority":
          setValidatePriority(`input-field ${validated}`);
          break;
        case "description":
          setValidateDescription(`input-field ${validated}`);
          break;
      }
    }
  };

  const addAndSaveIool = (item) => {
    remove(tools, (i) => i === item);
    setTools(tools.sort());
    setIsDropdown(false);
    formDetails.tools.push(item);
  };

  const deleteIool = (item) => {
    remove(formDetails.tools, (i) => i === item);
    setIsTools(false);
    tools.push(item);
    tools.sort();
  };

  const updatePictureLink = (e, idx) => {
    const abc = {};
    abc[idx] = e.target.value;
    setPictureLink({ ...pictureLink, ...abc });
    console.log("update pictureLink >> ", pictureLink);
  };

  const deletePictureLink = () => {
    const keys = Object.keys(pictureLink);
    // const values = Object.values(pictureLink);
    for (let i = keys.length - 1; i >= 0; i--) {
      console.log("count: ", countPic);
      console.log("keys: ", parseInt(keys[i]) + 1);
      if (countPic === parseInt(keys[i]) + 1) {
        console.log(pictureLink[("delete >> ", keys[i])]);
        delete pictureLink[keys[i]];
        break;
      }
    }
    setCountPic(countPic - 1);
    console.log("delete pictureLink >> ", pictureLink);
  };

  const savePictureLink = () => {
    const values = Object.values(pictureLink);
    const values_set = new Set(values);
    values_set.forEach((value) => {
      formDetails.pictureLink.push(value);
    });
  };

  return (
    <div>
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col size={12} sm={6} className="px-1">
            <input
              type="text"
              className={validateName}
              onClick={() => validate("name", "onClick")}
              value={formDetails.name}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
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
            <div className={validateTools}>
              <div className="d-flex justify-content-between">
                <div className="mb-2 d-inline" style={{ fontSize: "16px" }}>
                  Languages & Frameworks
                </div>
                <div className="d-inline dropdown">
                  <button
                    className="dropbtn"
                    type="button"
                    onMouseOver={() => validate("tools", "onClick")}
                  >
                    Choose
                  </button>
                  <div className="dropdown-content">
                    {tools.map((tool, idx) =>
                      isDropdown ? (
                        <button
                          key={idx}
                          type="button"
                          className="d-block dropdown-content-item"
                          onClick={() => {
                            addAndSaveIool(tool);
                          }}
                        >
                          {tools[idx]}
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
                      onClick={() => {
                        deleteIool(tool);
                      }}
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

          <Col size={12} sm={12} className="px-1">
            <div className="input-field">
              <div className="d-flex justify-content-start">
                <div className="mb-2 d-inline" style={{ fontSize: "16px" }}>
                  Picture Link
                </div>
                <button
                  type="button"
                  className="dropbtn d-inline mx-2"
                  style={pictureStyle.button}
                  onClick={() => setCountPic(countPic + 1)}
                >
                  add
                </button>
                <button
                  type="button"
                  className="dropbtn d-inline mx-2"
                  style={pictureStyle.button}
                  onClick={() => (countPic >= 1 ? deletePictureLink() : null)}
                >
                  remove
                </button>
              </div>

              {Array.from(Array(countPic)).map((c, idx) => (
                <div key={idx.toString()}>
                  <input
                    type="text"
                    className="input-field input-field-size"
                    style={pictureStyle.input}
                    placeholder={`Picture link ${idx + 1}`}
                    onKeyPress={(e) => {
                      e.key === "Enter" && e.preventDefault();
                    }}
                    // value={pictureLink[idx]}
                    // onInput={() => onEmpty()}
                    onChange={(e) => updatePictureLink(e, idx)}
                  />
                </div>
              ))}
            </div>
          </Col>

          <Col size={12} sm={12} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.videoLink}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              placeholder="Video Link"
              onChange={(e) => onFormUpdate("videoLink", e.target.value)}
            />
          </Col>

          <Col size={12} sm={12} className="px-1">
            <input
              type="text"
              className="input-field"
              value={formDetails.projectLink}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              placeholder="Project Link"
              onChange={(e) => onFormUpdate("projectLink", e.target.value)}
            />
          </Col>

          <Col size={12} sm={12} className="px-1">
            <div className={validatePriority}>
              <div className="mb-2">Priority</div>
              {priorityList.map((priority) => (
                <Col key={`inline-${priority}`}>
                  <Form.Check
                    inline
                    label={priority}
                    value={priority}
                    name="priorities"
                    type="radio"
                    id={`inline-${priority}-1`}
                    placeholder="Priority"
                    onChange={(e) => {
                      onFormUpdate("priority", e.target.value);
                      validate("priority", "onClick");
                    }}
                  />
                </Col>
              ))}
            </div>
          </Col>
          <Col size={12} sm={12} className="px-1">
            <textarea
              rows="6"
              className={validateDescription}
              value={formDetails.description}
              placeholder="Description"
              onClick={() => validate("description", "onClick")}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
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
