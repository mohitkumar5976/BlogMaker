import React from "react";
import { Stack } from "@mui/material";
import RecentPost from "./RecentPost";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  return (
    <Stack spacing={1}>
      <Link to={`/posts/1`}>
        <RecentPost imageUrl={"/assets/images/image1.jpg"} />
      </Link>
      <Link to={`/posts/2`}>
        <RecentPost imageUrl={"/assets/images/image2.jpg"} />
      </Link>
      <Link to={`/posts/3`}>
        <RecentPost imageUrl={"/assets/images/image1.jpg"} />
      </Link>
    </Stack>
  );
};

export default RecentPosts;
