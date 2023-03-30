import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import community from "../../Images/Community.gif";
import orderImage from '../../Images/order.jpg';
import orderImage1 from '../../Images/mocha.jpg';
import "./HomePage.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <MainScreen title="Java-Coffee Shop" />
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2">
            <div className="features-box text-center mt-5 mt-lg-0">
              <img
                src={community}
                alt="Features"
                className="img-fluid rounded-circle"
                id="community-img"
              />
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 order-lg-1">
            <div className="features-box">
              <h3 className="mb-4">Java- Coffee Shop</h3>
              <p className="text-muted mb-4">
              At Java-Coffee Shop, we are passionate about providing our customers with the best possible coffee experience. That's why we only source our beans from local farmers who share our commitment to quality and sustainability. Our expert baristas take great care in preparing each and every drink, using only the freshest ingredients and the latest brewing techniques.

In addition to our wide selection of coffee and tea drinks, we also offer a variety of fresh baked goods, sandwiches, and salads. Our bakery selection includes everything from flaky croissants to decadent cakes, all made from scratch in our own kitchen. And for those looking for something heartier, our sandwiches and salads are made with only the freshest ingredients and are perfect for a quick lunch or a leisurely afternoon meal.


              </p>
              <Button variant="primary" onClick={handleShowModal}>
                View Menu
              </Button>
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Our Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={orderImage} />
              <Card.Body>
                <Card.Title>Latte</Card.Title>
                <Card.Text>
                  Latte is an amazing sweet drink.
                </Card.Text>
                <Button variant="secondary">Order Now</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={orderImage1} />
              <Card.Body>
                <Card.Title>Mocha</Card.Title>
                <Card.Text>
                  Mocha he mocha. As you get the mouka, get some mocha.
                </Card.Text>
                <Button variant="secondary">Order Now</Button>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Order Now</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default HomePage;
