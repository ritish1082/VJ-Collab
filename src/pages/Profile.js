import React, { useContext, useState } from "react";
import UserContext from "../UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom"
function Profile() {
  const [name, setName] = useState("");
  const [lid, setLid] = useState("");
  const { user } = useContext(UserContext);
  const uid = user?.uid;
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, "users", uid), {
      name: name,
      linkedin: lid,
    });
    toast.success("Profile Created!")
    navigate("/collab")
  };

  return (
    <div className="container mt-2">
      <h3>My Profile</h3>
      <form>
        <label className="me-5 mb-2">Gmail</label>
        <input type="text" disabled value={user?.email} />
        <br />
        <label className="me-5 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="me-5 mb-2">LinkedIn</label>
        <input
          type="text"
          value={lid}
          onChange={(e) => setLid(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}

export default Profile;
