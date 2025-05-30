import { useState, useEffect } from "react";
import SignUp from "./ui/sign_up";
import SignInPage from "./ui/sign_in";
import UserProfileDashboard from "./ui/UserProfileDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import NavBar from "./ui/NavBar";
import Home from "./ui/Home";
import Politics from "./ui/Politics";
import Economics from "./ui/Economics";
import Cultural from "./ui/Cultural";
import Movies from "./ui/Movies";
import Cricket from "./ui/Cricket";
import Footer from "./ui/Footer";
import CreateBlogPage from "./ui/CreateBlogPage";
import BlogFullview from "./ui/BlogFullView";

const App = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL || "https://unfold-ink-backend.vercel.app";
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        return JSON.parse(userData);
      } catch (e) {
        console.error("Error parsing user from localStorage:", e);
        localStorage.removeItem("user");
      }
    }
    return null;
  });

  const [posts, setPosts] = useState([[], [], [], [], []]); // For 5 categories
  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching blogs:", err));
    console.log(posts);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullHomePage user={user} posts={posts} />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute user={user}>
              <CreateBlogPage user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={<UserProfileDashboard user={user} setUser={setUser} />}
        />
        <Route path="/signin" element={<SignInPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route
          path="/blog/:postId"
          element={<BlogFullview allPosts={posts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

const FullHomePage = ({ user, posts }) => {
  return (
    <>
      <NavBar user={user} />
      <Home />
      <Politics posts={posts[0]} />
      <Movies posts={posts[1]} />
      <Cultural posts={posts[2]} />
      <Economics posts={posts[3]} />
      <Cricket posts={posts[4]} />
      <Footer />
    </>
  );
};
