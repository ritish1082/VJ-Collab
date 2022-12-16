import { React, useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { db } from "../Firebase";
import { doc,query, onSnapshot, collection, orderBy, deleteDoc,where } from "firebase/firestore";
import RequestFeed from "../components/RequestFeed";
import Button from "../subComponents/Button";
import { toast } from "react-hot-toast";

function CollabRequest() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "collab", id, "requests"),
      orderBy("timestamp")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const handleEdit = (id) =>{

  }
  const handleDelete = async (id) =>{
    await deleteDoc(doc(db,"collab",id))
    .then(toast.success("Post Deleted"))
    navigate('/dashboard')
    .catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <h4 className="mx-auto">Collab Request</h4>
      <div className="mx-2">
      <Button
        description="Edit"
        textColor="white"
        bgColor="green"
        onClick={() => handleEdit(id)}
      />
      <Button
        description="Delete"
        textColor="white"
        bgColor="red"
        onClick={() => handleDelete(id)}
      />
      </div>

      {posts.length == 0 ? (
        <h4 className="text-center">No Collaborators yet!</h4>
      ) : (
        <table className="table mx-auto text-center">
          <thead>
            <th>Name</th>
            <th>Social Skills</th>
            <th>Skills</th>
            <th>Action</th>
          </thead>
          <tbody>
            {posts.map((post) => (
              <RequestFeed {...post} postid={id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CollabRequest;
