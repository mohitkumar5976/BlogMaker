import React from "react";
import ContentPostCard from "./ContentPostCard";
import { Grid } from "@mui/material";

const ContentPostList = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      sx={{
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      <Grid item>
        <ContentPostCard />
      </Grid>
      <Grid item>
        <ContentPostCard />
      </Grid>
      <Grid item>
        <ContentPostCard />
      </Grid>
      <Grid item>
        <ContentPostCard />
      </Grid>
      <Grid item>
        <ContentPostCard />
      </Grid>
      <Grid item>
        <ContentPostCard />
      </Grid>
    </Grid>
  );
};

export default ContentPostList;
