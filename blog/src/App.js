import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";

import NewPost from "./components/NewPost/NewPost";
import FeedBack from "./components/FeedBack/Feedback";

import Home from "./components/Home/Home";
import PostContent from "./components/Home/PostContent/PostContent";
import LayoutTab from "./components/Layout/LayoutTab";
import AdminPostEdit from "./components/AdminPanelPost/AdminPostEdit";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";
export default function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route
              exact
              path="/adminpostedit/:id"
              component={AdminPostEdit}
            ></Route>
            <PrivateRoute exact path="/" component={Home} />
            <Route
              exact
              path="/postcontent/:id"
              component={PostContent}
            ></Route>
            <Route exact path="/layout" component={LayoutTab}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/feedback" component={FeedBack}></Route>
            <Route exact path="/newpost" component={NewPost}></Route>
            <Route exact path="/adminpanel" component={AdminPanel}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/" component={LandingPage}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}
