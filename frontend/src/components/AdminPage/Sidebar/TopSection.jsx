import { Box, Stack } from "@mui/material";
import React from "react";

const TopSection = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} padding={2}>
      <Box className="w-24 h-24 ">
        <img
          src="/assets/images/mkk.jpg"
          alt=""
          className="rounded-full w-full h-full"
        />
      </Box>
      <span class="fs-4 dashboard">Mohit kumar</span>
    </Stack>
  );
};

export default TopSection;
