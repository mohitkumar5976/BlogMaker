import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header />
      </Grid>

      <Grid item xs={12} sm={12}>
        <PostList />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePage;
