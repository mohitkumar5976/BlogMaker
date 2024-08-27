import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContentPostCard = () => {
  return (
    <Paper sx={{ padding: 1, position: "relative" }}>
      <Grid container direction={{ xs: "column", lg: "row" }} spacing={1}>
        <Grid item sx={{width:{xs:"100%",lg:"200px"}}}>
          <img src="/assets/images/image2.jpg" className="w-full h-full" />
        </Grid>
        <Grid item>
          <Box>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                paddingRight: { xs: 3, lg: 0 },
                fontSize: { xs: "0.8rem", lg: "1rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, saepe. Itaque, quia? Harum maxime laudantium accusamus
              mollitia asperiores. Libero, ut.mollitia asperiores. Libero, ut.
            </Typography>
          </Box>
        </Grid>
      </Grid>

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
