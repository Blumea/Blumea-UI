import React from "react";
import { makeStyles } from "@mui/styles";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import LogoWhite from "../assets/BGreen.png";
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
    new: {
      main: "#000",
    },
  },
});
const useStyes = makeStyles({
  mainDiv: {
    backgroundColor: "#fff",
    width: "100%",
    height: "700px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginTop: "20px",
  },
  bgLogo: {
    position: "absolute",
    right: "0",
    top: "100px",
    zIndex: -1,
  },
  brandName: {
    color: "#000",
    fontWeight: 800,
    fontSize: "15rem",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      fontSize: "10rem",
    },
    "@media (max-width: 700px)": {
      fontSize: "6rem",
    },
  },
  subTitle: {
    color: "#000",
    fontSize: "25px",
    fontWeight: 600,
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
    fontWeight: 600,
    "@media (max-width: 545px)": {
      flexWrap: "wrap",
    },
  },
  baseButton: {
    textDecoration: "none",
    width: "150px",
    height: "50px",
    backgroundColor: "#29caa5",
    fontSize: "21px",
    border: "none",
    outline: "none",
    "@media (max-width: 545px)": {
      marginBottom: "20px",
    },
  },
  docLink: {
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
    <div className={classes.mainDiv} id="home">
      <img
        src={LogoWhite}
        alt="Logo"
        className={classes.bgLogo}
        width="800px"
      />
      <div className={classes.centeralSection}>
        <span className={classes.brandName}>Blumea.</span>
        <div className={classes.subTitle}>
          Simplifying Bloom Filters integrations.
          <span
            style={{
              color: "#29caa5",
              textShadow: "0 0 3px #000, 0 0 5px #000",
            }}
          >
            {" "}Designed for Developers.
          </span>
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
                fontWeight: "600",
              }}
            >
              Get Started
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              href="https://docs-blumea.vercel.app/"
              variant="outlined"
              sx={{
                margin: "10px",
                fontWeight: "600",

                // padding: "7px",
              }}
              size="large"
              endIcon={<NavigateNextOutlinedIcon />}
              color="new"
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
