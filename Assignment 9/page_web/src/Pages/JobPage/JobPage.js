import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const JobPage = () => {
  return (
    <>
      <MainScreen title="Job Positions" />
     
      <Container>
        <Row>
          <Col>
            <Card style={{ backgroundColor: "#D3B8AE" }}>
              <Card.Body>
                <Card.Title>Software Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Java Coffee shop- Quincy
                </Card.Subtitle>
                <Card.Text>
                  We are looking for a talented software developer to join our team.
                  Responsibilities include developing and maintaining software
                  applications, debugging and troubleshooting issues, and
                  collaborating with other team members.
                </Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "#D3B8AE" }}>
              <Card.Body>
                <Card.Title>Data Analyst</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Java Coffee Shop - Southstation 
                </Card.Subtitle>
                <Card.Text>
                  We are seeking a data analyst to help us analyze and interpret
                  complex data sets. The ideal candidate will have strong analytical
                  skills, experience with statistical analysis software, and the
                  ability to communicate insights effectively.Responsibilities include developing and maintaining some
                </Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default JobPage;
