import { Grid } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const PostList = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={1}
      padding={1}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Link to={`/posts/${1}`}>
          <PostCard image={"/assets/images/image1.jpg"} />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Link to={`/posts/${2}`}>
          <PostCard image={"/assets/images/image2.jpg"} />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Link to={`/posts/${3}`}>
          <PostCard image={"/assets/images/image1.jpg"} />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Link to={`/posts/${3}`}>
          <PostCard image={"/assets/images/image1.jpg"} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default PostList;
