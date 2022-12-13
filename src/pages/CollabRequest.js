import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { db } from "../Firebase";
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
import RequestFeed from "../components/RequestFeed";

function CollabRequest() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
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

  return (
    <div>
      <h4 className="mx-auto">Collab Request</h4>
      {posts.length == 0 && (
        <h4 className="text-center">No Collaborators yet!</h4>
      )}
      <table className="table mx-auto text-center">
        <thead>
          <th>Name</th>
          <th>Social Skills</th>
          <th>Skills</th>
          <th>Action</th>
        </thead>
        <tbody>
          {posts.map((post) => (
            <RequestFeed {...post} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollabRequest;
