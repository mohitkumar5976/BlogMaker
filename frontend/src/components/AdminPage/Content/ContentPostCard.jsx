import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContentPostCard = () => {
  return (
    <Paper sx={{ padding: 1, position: "relative" }}>
      <Stack direction={"row"} gap={1.5} height={"auto"}>
        <Box>
          <img src="/assets/images/image2.jpg" className="w-full h-full" />
        </Box>
        <Box>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              paddingRight: { xs: 3, lg: 0 },
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            saepe. Itaque, quia? Harum maxime laudantium accusamus mollitia
            asperiores. Libero, ut.
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <IconButton
          sx={{
            width: "2rem", // Customize the width
            height: "2rem", // Customize the height
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ContentPostCard;
