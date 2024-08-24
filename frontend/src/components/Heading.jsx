import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ title, variant }) => {
  return (
    <Typography
      variant={variant}
      fontSize={{
        xs: "20px",
        sm: "24px",
        md: "28px",
        lg: "32px",
        xl: "36px",
      }}
    >
      {title}
    </Typography>
  );
};

export default Heading;
