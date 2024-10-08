import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SidebarDrawer from "./SidebarDrawer";
import { Grid } from "@mui/material";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import CategoryTabs from "./CategoryTabs";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "black",
            padding:1
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            paddingBottom={1}
            spacing={1}
          >
            <Grid item xs={1} lg={6} display={{ xs: "block", lg: "none" }}>
              <SidebarDrawer />
            </Grid>
            <Grid item xs={11} lg={6}>
              <Link to={"/"}>
                <Heading title={"Coding Tools"} variant={"h4"} />
              </Link>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={12} lg={12}>
             <CategoryTabs/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
