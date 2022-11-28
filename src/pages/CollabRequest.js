import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { db } from "../Firebase";
import { doc, query, onSnapshot,collection, orderBy } from "firebase/firestore";
import CollabFeedCard from "../components/CollabFeedCard";
function CollabRequest() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const q=query(collection(db,"collab",id,"requests"),orderBy("timestamp"));
    const unsub = onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("qaDJSL;",posts)

      });
      console.log("GOOG",posts)
      return unsub;
  },[])

  return (
    <div>
      <h4>Collab Request</h4>
      {/* <CollabFeedCard {...posts} /> */}
      {posts.length==0 && <h4 className="text-center">No Collaborators yet!</h4>}
      <ul>
      {posts.map((post)=>(
        <li>{post.uid}</li>
      ))}
      </ul>
    </div>
  );
}

export default CollabRequest;
