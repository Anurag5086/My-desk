import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { PERSONAL_DATA } from "../../data/staticData";
import img from "../../assets/images/personal_bt.png";

function Personal() {
  const email = localStorage.getItem("googleEmail");

  if (email) {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <Container>
          <Row>
            <Col xs={12} sm={7}>
              <h1
                style={{
                  marginTop: "8rem",
                  fontSize: "4rem",
                  marginLeft: "2rem",
                  fontWeight: "bold",
                }}
                className="college_title"
              >
                PERSONAL SPACE
              </h1>
            </Col>
            <Col xs={12} sm={5}>
              <img style={{ marginLeft: "2rem" }} src={img} width="500px" />
            </Col>
          </Row>
        </Container>
        <div className="content" style={{ padding: "0px" }}>
          {PERSONAL_DATA.sections.map((cardData) => {
            return (
              <Link to={cardData.link} className="card_link">
                <div className="card_college">
                  <div className="icon">
                    <i className="material-icons md-36">{cardData.icon}</i>
                  </div>
                  <p className="title">{cardData.title}</p>
                  <p className="text">{cardData.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    window.location.href = "/login";
  }
}

export default Personal;
