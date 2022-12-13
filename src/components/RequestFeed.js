import {React,useState} from "react";
import SkillRating from "../components/SkillRating";
import { InputGroup } from "react-bootstrap";
import Button from "../subComponents/Button";
import { useEffect } from "react";
import { db } from "../Firebase";

import{doc,getDoc} from "firebase/firestore"
function RequestFeed(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const getUser = async () => {
    const docRef = doc(db, "users", props?.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    console.log(docSnap.data())
      setName(docSnap.data().name);
      setLink(docSnap.data().linkedin);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUser();
  }, [props]);

  return (
    <>
      <tr>
        <td>{name}</td>
        <td><a href={link}>Linkedin</a></td>
        <td>
          <SkillRating {...props.rating} />
        </td>
        <td>
          <InputGroup className="action">
            <Button bgColor="red" textColor="white" description="-" />
            <Button bgColor="green" textColor="white" description="+" />
          </InputGroup>
        </td>
      </tr>
    </>
  );
}

export default RequestFeed;
