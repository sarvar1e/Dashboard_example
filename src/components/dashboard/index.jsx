import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import SettingsIcon from "@mui/icons-material/Settings";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import LogoutIcon from "@mui/icons-material/Logout";
import logo1 from "../assets/Group 27.svg";
import {
  BarChart,
  Infobox,
  LogoIcon,
  PandLmainbox,
  PandLwrapper,
} from "./indexstyle";
import ArticleIcon from "@mui/icons-material/Article";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import FormatterDemoNoSnap from "./chart";
import HiddenLegend from "./pandl";
import ActivityContainer from "./activity";

import Slider from "@mui/material/Slider";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <LogoIcon>
        <img src={logo1} alt="icon1" />
        <p>Nucleus</p>
      </LogoIcon>

      <List>
        {["Profile", "Billings", "Invoices"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              sx={{
                width: "158.373px",
                height: " 52.087px",
                borderRadius: "70.388px",
                "&:hover": { bgcolor: "#F3F0FF", color: "#551FFF" },
              }}
            >
              <ListItemIcon sx={{ "&:hover": { color: "#551FFF" } }}>
                {index % 3 === 0 ? (
                  <AccountCircleIcon />
                ) : index % 3 === 1 ? (
                  <FeaturedPlayListIcon />
                ) : (
                  <CreditCardIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          width: "139.368px",
          marginLeft: "50px",
        }}
      />
      <List>
        {["Settings", "Help", "Log out"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              sx={{
                width: "158.373px",
                height: " 52.087px",
                borderRadius: "70.388px",
                "&:hover": { bgcolor: "#F3F0FF", color: "#551FFF" },
              }}
            >
              <ListItemIcon sx={{ "&:hover": { color: "#551FFF" } }}>
                {index % 3 === 0 ? (
                  <SettingsIcon />
                ) : index % 3 === 1 ? (
                  <WifiCalling3Icon />
                ) : (
                  <LogoutIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#F8F9FC" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "80px",
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#F8F9FC",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "1.5rem",
                letterSpacing: "0.05em",
                lineHeight: "1.2",
                fontWeight: "bold",
                color: "#15192C",
              }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                letterSpacing: "0.02em",
                lineHeight: "1.5",
                marginTop: "10px",
                color: "#92959E",
              }}
            >
              Information about your current plan and usage
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "3" }}>
            <Infobox>
              <div className="projectbox">
                <div className="docbox">
                  <ArticleIcon sx={{ color: "#FF6A00" }} />
                </div>
                <div className="docboxtext">
                  <p>Projects</p>
                  <h6>3</h6>
                </div>
              </div>
              <div className="projectbox">
                <div className="docbox2">
                  <SwapVertIcon sx={{ color: "#551FFF" }} />
                </div>
                <div className="docboxtext">
                  <p>Requests</p>
                  <h6>3456</h6>
                </div>
              </div>
              <div className="projectbox">
                <div className="docbox3">
                  <AccountCircleIcon sx={{ color: "#00B7FE" }} />
                </div>
                <div className="docboxtext">
                  <p>Users</p>
                  <h6>3</h6>
                </div>
              </div>
              <div className="projectbox">
                <div className="docbox4">
                  <DataUsageIcon sx={{ color: "#FD2254" }} />
                </div>
                <div className="docboxtext">
                  <p>Storagge</p>
                  <h6>128/500 GB</h6>
                </div>
              </div>
            </Infobox>

            <BarChart>
              <FormatterDemoNoSnap></FormatterDemoNoSnap>
            </BarChart>

            <PandLmainbox>
              <HiddenLegend />
              <PandLwrapper style={{ marginLeft: "22px" }}>
                <div className="textplan">
                  <h1>Current Plan</h1>
                  <p>Information and usages of your current plan</p>
                  <Box sx={{ width: "220px" }}>
                    <h5 style={{ marginBottom: "-12px" }}>Projects</h5>
                    <Slider
                      size="small"
                      defaultValue={70}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  <Box sx={{ width: "220px" }}>
                    <h5 style={{ marginBottom: "-12px" }}>Users</h5>
                    <Slider
                      size="small"
                      defaultValue={70}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      color="#551FFF"
                    />
                  </Box>
                  <Box sx={{ width: "220px" }}>
                    <h5 style={{ marginBottom: "-12px" }}>Requests/day</h5>
                    <Slider
                      size="small"
                      defaultValue={70}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </div>
              </PandLwrapper>
            </PandLmainbox>
          </div>
          <div style={{ flex: "1" }}>
            <ActivityContainer />
          </div>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
