import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img from "../../Login/Login.jpg";
import "./SidebarTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SidebarTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static" style={{ backgroundColor: "Brown" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Recent Posts" {...a11yProps(0)} />
          <Tab label="Videos" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="sidebar-recentpost-block-right">
            <div className="sidebar-recentpost-block-1">
              <div className="sidebar-recentpost-block-1-img">
                <img src={img} alt="" width="100%" height="100%" />
              </div>
              <div className="sidebar-recentpost-block-1-title">
                <p> Hello,This is the first blog created by jackson sahab</p>
              </div>
            </div>
            <div className="sidebar-recentpost-block-2">
              <div className="sidebar-recentpost-block-1-img">
                <img src={img} alt="" width="100%" height="100%" />
              </div>
              <div className="sidebar-recentpost-block-1-title">
                <p> Hello,This is the first blog created by jackson sahab</p>
              </div>
            </div>
            <div className="sidebar-recentpost-block-3">
              <div className="sidebar-recentpost-block-1-img">
                <img src={img} alt="" width="100%" height="100%" />
              </div>
              <div className="sidebar-recentpost-block-1-title">
                <p> Hello,This is the first blog created by jackson sahab</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={img} class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item">
                <img src={img} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="sidebar-comments">This is comment section</div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
