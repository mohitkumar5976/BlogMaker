import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostDetailPage from "./pages/PostDetailPage";
import AdminPage from "./pages/AdminPage";
import ContentPostList from "./components/AdminPage/Content/ContentPostList";
import NewPost from "./components/AdminPage/Content/NewPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route exact path="/admin" element={<AdminPage />}>
          <Route
            exact
            index
            path="/admin"
            element={<ContentPostList />}
          ></Route>
          <Route exact path="/admin/newpost" element={<NewPost />}></Route>
        </Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
