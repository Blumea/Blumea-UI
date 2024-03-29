import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Logo from "../assets/BGreen.png";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    custom: {
      main: "#000",
      darker: "#1a5a60",
    },
    whiteColor: {
      main: "#fff",
    },
  },
});
const useStyles = makeStyles({
  mainDiv: {
    position: "sticky",
    backgroundColor: "#20232a",
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentSection: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandPlate: {
    // color: "#61dafb",
    color: "#29caa5",
    fontSize: "22px",
    fontWeight: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "max-content",
    "@media (max-width: 600px)": {
      width: "100%",
    },
    // justifyContent: "center",
    // alignItems: "center",
  },
  primaryLinks: {
    display: "flex",
    color: "#fff",
    "& a": {
      fontSize: "20px",
      fontWeight: 200,
      marginLeft: "20px",
    },
    "@media (max-width: 1259px)": {
      display: "none",
    },
  },
  secondaryLinks: {
    display: "flex",
    color: "#fff",
    "& a": {
      fontSize: "20px",
      fontWeight: 200,
      marginLeft: "20px",
      display: "flex",
      alignItems: "center",
    },
  },
  brandBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "100%",
    fontWeight: "800",
    margin: "0px",
  },
});

const drawerWidth = 180;
const navItems = [
  { name: "Docs", link: "https://docs-blumea.vercel.app/" },
  {
    name: "Playground",
    link: "https://blumea-playground.vercel.app/",
  },
  {
    name: "Feedback",
    link: "https://blumea-feedback-d806d9.login.mojoauth.com?redirect_uri=https://medhavibasera.github.io/feedback/",
  },
];

function DrawerAppBar(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}> */}
      <div className={classes.brandPlate}>
        <div className={classes.brandBox}>
          <img src={Logo} alt="Logo" width="20px" />
          <span>&nbsp;Blumea</span>
        </div>
      </div>
      {/* </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        <AppBar component="nav" color="custom">
          <Toolbar
          // variant="dense"
          >
            <IconButton
              color="whiteColor"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.brandPlate}>
              <img src={Logo} alt="Logo" width="25px" />
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className={classes.brandPlate}>
                {/* <img src={Logo} alt="Logo" width="40px" /> */}
                {/* &nbsp; */}
                <a
                  href="https://blumea.github.io/Blumea-UI/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  &nbsp;Blumea
                </a>
              </div>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: "#fff", fontWeight: "600" }}
                  href={item.link}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
