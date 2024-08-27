import React from "react";
import Sidebar from "../components/AdminPage/Sidebar";
import { Box, Grid, Stack } from "@mui/material";
import Heading from "../components/Heading";
import { Outlet } from "react-router-dom";
import AdminMenubar from "../components/AdminPage/AdminMenubar";

const AdminPage = () => {
  return (
    <Grid container direction="column" sx={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        className="bg-black"
        sx={{
          height: "100px", // Fixed height for the header
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={{ xs: "start", lg: "center" }}
          alignItems={"center"}
        >
          <Box
            sx={{ display: { xs: "block", lg: "none" } }}
            className="text-white bg-red-600 pb-1 px-1"
          >
            <AdminMenubar />
          </Box>
          <Box className="text-white p-2 flex justify-center">
            <Heading title={"Welcome to Admin Panel"} variant={"h4"} />
          </Box>
        </Stack>
      </Grid>
      <Grid
        container
        padding={1}
        direction={{ xs: "column", lg: "row" }}
        spacing={1}
        flexGrow={1}
      >
        <Grid
          item
          display={{ xs: "none", lg: "block" }}
          lg={3}
          sx={{ height: "100%" }} // Ensure sidebar takes full height of its container
        >
          <Sidebar />
        </Grid>
        <Grid item xs={12} lg={9} flexGrow={1} sx={{ overflowY: "auto" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
