import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const RecentPost = ({ imageUrl }) => {
  return (
    <Card
      sx={{ width: "100%", height: "auto", display: "flex", gap: 1 }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={`${imageUrl}`}
        alt="Paella dish"
        sx={{ width: "140px" }}
      />
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Box>
    </Card>
  );
};

export default RecentPost;
