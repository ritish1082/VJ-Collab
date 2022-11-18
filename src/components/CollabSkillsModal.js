import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "../subComponents/Button";
import raiseHand from "../images/raise-hand.png";
import Table from "react-bootstrap/Table";
import UserContext from "../UserContext";
import toast from "react-hot-toast";

const CollabSkillsModal = (props) => {
  const { user } = useContext(UserContext);
  let [show, setShow] = useState(false);
  const handleNotSignedIn = () => {
    toast.error("Not Loged In !");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    toast.success("Request Sent!")
    // var e = document.getElementById("skillSet");
    // var value = e.value;
    // var text = e.options[e.selectedIndex].text;
  };
  const rating = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="float-end">
        {user ? (
          <Button
            imgUrl={raiseHand}
            description="Collab"
            textColor="white"
            bgColor="green"
            onClick={handleShow}
          />
        ) : (
          <Button
            imgUrl={raiseHand}
            description="Collab"
            textColor="white"
            bgColor="green"
            onClick={handleNotSignedIn}
          />
        )}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        variant="top"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Skill Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {props.skills.map((skill, key) => (
                <tr key={key}>
                  <td>{skill}</td>
                  <td>
                    <select id="skillSet">
                      <option value={0}>0</option>
                      {rating.map((rate, key) => (
                        <option name={skill} key={key} value={key + 1}>
                          {rate}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            description="Cancel"
            textColor="white"
            bgColor="red"
            onClick={handleClose}
          />
          <Button
            description="Submit"
            textColor="white"
            bgColor="green"
            onClick={handleSubmit}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CollabSkillsModal;
