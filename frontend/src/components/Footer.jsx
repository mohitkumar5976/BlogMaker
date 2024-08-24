import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      fontFamily={"cursive"}
      padding={1}
      bgcolor={"black"}
      color={"white"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Developed By Mohit Kumar
    </Box>
  );
};

export default Footer;
