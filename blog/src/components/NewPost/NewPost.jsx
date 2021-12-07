import React, { useState, useEffect } from "react";
import "./NewPost.css";
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

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [file, setFile] = useState();
  const [Filename, setFilename] = useState("");
  const [description, setDescription] = useState("");
  const [GetCategory, setGetCategory] = useState([]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(() => {
    loadCategory();
  });

  const loadCategory = async () => {
    await axios.get("/addnewCategory").then((res) => {
      setGetCategory(res.data);
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const PostData = new FormData();

    PostData.append("title", title);
    PostData.append("Category", Category);
    PostData.append("newpostpicture", file);
    PostData.append("filename", Filename);
    PostData.append("description", description);

    console.log("POST: ", PostData);

    await axios.post("/newpost", PostData).then((res) => {
      alert("Post Published");
      setTitle("");
      setDescription("");
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
                          value={title}
                          name="title"
                          onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className="newpost-picture">
                          <h4 className="newpost-picture-title">Add Images</h4>
                          <input
                            type="file"
                            className="newpost-picture-input"
                            name="newpostpicture"
                            accept="newpostpicture/*"
                            onChange={saveFile}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="newpost-leftside">
                      <div className="newpost-publish-button">
                        <button
                          type="submit"
                          className="btn btn-primary newpost-submit-button"
                        >
                          Publish
                        </button>
                      </div>
                      <div className="newpost-category-div">
                        <select
                          className="newpost-category"
                          value={Category}
                          name="Category"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Select</option>
                          {GetCategory.map((data) => (
                            <option value={data.categories}>
                              {data.categories}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="newpost-description">
                    <div className="newpost-description-title">
                      Post Description
                    </div>
                    <textarea
                      name="description"
                      id=""
                      cols="106"
                      rows="15"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
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
