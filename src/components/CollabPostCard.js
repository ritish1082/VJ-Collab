import React from "react";
import Button from "../subComponents/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CollabPostForm from "./CollabPostForm";
import addIcon from "../images/add-icon.png";

function CollabPostCard() {
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        imgUrl={addIcon}
        description="Post Collaboration"
        bgColor="#109c5b"
        onClick={handleShow}
      />

      {/* Modal for collaboration post form */}
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        scrollable
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollabPostForm />
        </Modal.Body>
        <Modal.Footer>
          <Button
            description="Discard"
            textColor="white"
            bgColor="red"
            onClick={handleClose}
          />
          <Button
            description="Post"
            textColor="white"
            bgColor="green"
            onClick={handleClose}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CollabPostCard;
