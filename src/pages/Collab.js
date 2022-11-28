import { React, useState, useEffect } from "react";
import CollabPostCard from "../components/CollabPostCard";
import CollabFeedCard from "../components/CollabFeedCard";
import { Row, Col } from "react-bootstrap";
import { orderBy, collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

function Collab() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "collab"), orderBy("time", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return (
    <div>
      <CollabPostCard />
      <Row xs={1} md={3} className="g-4 mt-3">
        {posts.map((post) => (
          <Col className="mx-auto">
            <CollabFeedCard {...post} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Collab;
