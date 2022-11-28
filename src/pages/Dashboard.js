import { React, useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CollabFeedCard from "../components/CollabFeedCard";
import { Outlet, Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { db } from "../Firebase";
import {
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { Row, Col } from "react-bootstrap";
function Dashboard() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("Loading..");
  const [posts, setPosts] = useState([]);
  const getUser = async () => {
    if (user) {
      try {
        const ref = doc(db, "users", user?.uid);
        const docSnap = await getDoc(ref);
        setName(docSnap.data()?.name);
      } catch (err) {
        console.log(err);
      }

      try {
        const q = query(
          collection(db, "collab"),
          where("uid", "==", user?.uid)
        );
        const unsub = onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return unsub;
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div>
      {!user ? (
        <h1 className="text-center">User Not Loged in</h1>
      ) : (
        <div>
          {/* <h4 className="text-center m-5">Welcome back!</h4> */}
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col">
                <div className="profile-bar text-center w-100">
                  <div className="profile ">
                    <img
                      src={user?.photoURL}
                      alt="Loading..."
                      className="profilepic mb-4"
                    />
                    <h4>{name}</h4>
                    <h6>{user?.email}</h6>
                    <Link to="/profile"><p>View Profile</p></Link>
                  </div>
                  <Row className="m-4 p-3 bg-dark">
                    <Col>
                      <Link
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        to="/dashboard"
                      >
                        {" "}
                        Collaboration{" "}
                      </Link>
                    </Col>
                    <Col>
                      <Link
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        to="forum-dashboard"
                      >
                        Discussion
                      </Link>
                    </Col>
                  </Row>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Row xs={1} md={3} className="g-4 mt-3">
              {posts.map((post) => (
                <Col className="mx-auto">
                  <Link to={`/collab/${post.id}`}><CollabFeedCard {...post}/></Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      {/* collab posts */}
    </div>
  );
}

export default Dashboard;
