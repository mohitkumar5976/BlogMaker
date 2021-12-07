import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../components/NewPost/NewPost.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdminPanelSidebar from "../AdminPanelSidebar/AdminPanelSidebar";
import axios from "axios";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminPostEdit() {
  const [GetPost, setGetPost] = useState({
    Title: "",
    Description: "",
    Category: "",
  });

  const { Title, Description, Category } = GetPost;
  let history = useHistory();
  const { id } = useParams();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadadminPost();
  }, []);

  const onInputChange = (e) => {
    setGetPost({ ...GetPost, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`/updateadminposts/${id}`, GetPost).then((res) => {
      history.push("/adminpanel");
      alert("Post Updated");
    });
  };

  const loadadminPost = async () => {
    await axios.get(`/getadminpostedit/${id}`).then((res) => {
      console.log(res.data);
      setGetPost({
        Title: res.data.title,
        Description: res.data.description,
        Category: res.data.category,
      });
    });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              BlogMaker
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <AdminPanelSidebar />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph>
            <div className="newpost-body">
              <div className="newpost-wrapper card">
                <form action="" className="newpost-form" onSubmit={onSubmit}>
                  <div className="newpost-header">
                    <div className="newpost-title">
                      <div className="newpost-title-label">Post Title</div>
                      <div className="newpost-input-div">
                        <input
                          className="newpost-input"
                          type="text"
                          value={Title}
                          name="Title"
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                    <div className="newpost-leftside">
                      <div className="newpost-publish-button">
                        <button
                          type="submit"
                          className="btn btn-primary newpost-submit-button"
                        >
                          Update
                        </button>
                      </div>
                      <div className="newpost-category-div">
                        <select
                          className="newpost-category"
                          value={Category}
                          name="Category"
                          onChange={(e) => onInputChange(e)}
                        >
                          <option value="DSA">DSA</option>
                          <option value="Web">Web</option>
                          <option value="Android">Android</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="newpost-description">
                    <div className="newpost-description-title">
                      Post Description
                    </div>
                    <textarea
                      name="Description"
                      id=""
                      cols="106"
                      rows="15"
                      onChange={(e) => onInputChange(e)}
                      value={Description}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </Typography>
        </Main>
      </Box>
    </>
  );
}
