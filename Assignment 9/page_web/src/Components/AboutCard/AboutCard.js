// import React, { useState } from "react";
// import { Card, Container, Button, Modal } from "react-bootstrap";

// const AboutCard = (props) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClick = () => {
//     setShowPopup(true);
//   };

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   return (
//     <Container>
//       <Card style={{ width: "20rem" }}>
//         <Card.Body>
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text>{props.content}</Card.Text>
//           <Button variant="primary" onClick={handleClick}>
//             Click to know more
//           </Button>
//         </Card.Body>
//       </Card>
//       <Modal show={showPopup} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{props.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={props.image} alt={props.title} style={{ width: "100%" }} />
//           <p>{props.content}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default AboutCard;
import React, { useState } from "react";
import { Card, Container, Button, Modal } from "react-bootstrap";
import "./AboutCard.css"

const AboutCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Click to know more
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.image}
            alt={props.title}
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />
          <p>{props.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AboutCard;
