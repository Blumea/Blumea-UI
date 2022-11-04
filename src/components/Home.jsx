import React from "react";
import { makeStyles } from "@mui/styles";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import LogoWhite from "../assets/BG-Edit.png";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    custom: {
      main: "#29caa5",
      darker: "#1a5a60",
    },
  },
});
const useStyes = makeStyles({
  mainDiv: {
    backgroundColor: "#282c34",
    width: "100%",
    height: "530px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  bgLogo: {
    position: "absolute",
    right: "0",
    top: "80px",
    zIndex: -1,
  },
  brandName: {
    color: "#29caa5",
    fontWeight: 700,
    fontSize: "60px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 565px)": {
      fontSize: "48px",
    },
  },
  subTitle: {
    color: "#fff",
    fontSize: "32px",
    fontWeight: 200,
    zIndex: 1,
    margin: "20px 0px 60px ",
    textAlign: "center",
    "@media (max-width: 565px)": {
      fontSize: "22px",
    },
  },
  hyperlinkDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 545px)": {
      flexWrap: "wrap",
    },
  },
  baseButton: {
    textDecoration: "none",
    width: "150px",
    height: "50px",
    // backgroundColor: "#61dafb",
    backgroundColor: "#29caa5",
    fontSize: "21px",
    border: "none",
    outline: "none",
    "@media (max-width: 545px)": {
      marginBottom: "20px",
    },
  },
  docLink: {
    // color: "#61dafb",
    color: "#29caa5",
    fontSize: "21px",
    fontWeight: 400,
    marginLeft: "20px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 545px)": {
      marginBottom: "20px",
    },
  },
  centeralSection: {
    "@media (max-width: 865px)": {
      padding: "0px 20px",
    },
  },
});
function Home() {
  const classes = useStyes();
  return (
    <div className={classes.mainDiv}>
      <img
        src={LogoWhite}
        alt="Logo"
        className={classes.bgLogo}
        width="450px"
      />
      <div className={classes.centeralSection}>
        <span className={classes.brandName}>Blumea</span>
        <div className={classes.subTitle}>
          An NPM package to Bloomify all your projects.
        </div>
        <div className={classes.hyperlinkDiv}>
          {/* <button className={classes.baseButton}>Get Started</button> */}
          <ThemeProvider theme={theme}>
            <Button
              href="https://www.npmjs.com/package/blumea"
              variant="contained"
              size="large"
              color="custom"
              sx={{
                margin: "10px",
              }}
            >
              Get Started
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              href="https://blumea-filters-ekuc20lg4-medhavi11.vercel.app/"
              variant="outlined"
              sx={{
                margin: "10px",
                // padding: "7px",
              }}
              size="large"
              endIcon={<NavigateNextOutlinedIcon />}
              color="custom"
            >
              Take a Tour
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Home;
