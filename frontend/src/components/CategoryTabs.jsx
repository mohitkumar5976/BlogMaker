import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link, styled } from "@mui/material";

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#1976d2",
  },
}));

export default function CategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ maxWidth: { sm: 425, md: "100%" }, bgcolor: "background.paper" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <StyledTab label="Home" />
        <StyledTab label="Android" />
        <StyledTab label="Web Development" />
        <StyledTab label="Windows" />
      </Tabs>
    </Box>
  );
}
