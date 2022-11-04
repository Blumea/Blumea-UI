import React from "react";
import { makeStyles } from "@mui/styles";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

import Logo from "../assets/BG-Edit.png";
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
    width: "100%",
    backgroundColor: "#20232a",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    height: "100px",
    backgroundColor: "#282c34",
  },
  mainSection: {
    width: "100%",
    backgroundColor: "#20232a",
    maxWidth: "1200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "30px 0px",
    "@media (max-width: 1259px)": {
      maxWidth: "900px",
    },
    "@media (max-width: 990px)": {
      maxWidth: "600px",
    },
    "@media (max-width: 645px)": {
      maxWidth: "400px",
    },
    "@media (max-width: 450px)": {
      maxWidth: "320px",
    },
  },
  hyperlinkDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  baseButton: {
    width: "150px",
    height: "50px",
    backgroundColor: "#29caa5",
    fontSize: "21px",
    border: "none",
    outline: "none",
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
  },
  footerBrand: {
    maxWidth: "400px",
    color: "#fff",
    "& p": {
      fontSize: "18px",
      fontWeight: 100,
      lineHeight: "1.5",
      marginTop: "20px",
    },
  },
  footerBrandTitle: {
    color: "#29caa5",
    fontSize: "26px",
    fontWeight: 700,
  },
  footerPLink: {
    color: "#fff",
    "& h3": {
      fontSize: "20px",
      fontWeight: 700,
      marginTop: "20px",
    },
    "& ul": {
      listStyle: "none",
      padding: "0px",
      margin: "0px",
      "& li": {
        fontSize: "18px",
        fontWeight: 100,
        marginTop: "10px",
        "& a": {
          color: "#fff",
          textDecoration: "none",
        },
      },
    },
  },
  footerSLink: {
    color: "#fff",
    "& h3": {
      fontSize: "20px",
      fontWeight: 700,
      marginTop: "20px",
    },
    "& ul": {
      listStyle: "none",
      padding: "0px",
      margin: "0px",
      "& li": {
        fontSize: "18px",
        fontWeight: 100,
        marginTop: "10px",
        "& a": {
          color: "#fff",
          textDecoration: "none",
        },
      },
    },
  },
  copyRight: {
    width: "100%",
    padding: "10px 0px",
    backgroundColor: "#282c34",
    disdplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 100,
    textAlign: "center",
  },
  innerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
function Footer() {
  const classes = useStyes();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.topBar}>
        <div className={classes.hyperlinkDiv}>
          {/* <button className={classes.baseButton}>Get Started</button> */}
          <ThemeProvider theme={theme}>
            <Button variant="contained" size="large" color="custom">
              Get Started
            </Button>
          </ThemeProvider>
          <a>
            {/* <span className={classes.docLink}>
              Take The Tutorial&nbsp;
              <NavigateNextOutlinedIcon />
            </span> */}
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                sx={{
                  margin: "5px",padding: "7px"}}
                size="large"
                endIcon={<NavigateNextOutlinedIcon />}
                color="custom"
              >
                Take the Tutorial
              </Button>
            </ThemeProvider>
          </a>
        </div>
      </div>
      <div className={classes.mainSection}>
        <div className={classes.footerBrand}>
          <img src={Logo} width="50px" />
          &nbsp;<span className={classes.footerBrandTitle}>Blumea</span>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
        <div className={classes.footerPLink}>
          <h3>Docs</h3>
          <ul>
            <li>Installation</li>
            <li>Main Concepts</li>
            <li>Contrubuting</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={classes.footerSLink}>
          <h3>Links</h3>
          <ul>
            <li>Documentation</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className={classes.copyRight}>
        <div className={classes.innerDiv}>
          Copyright&nbsp; <CopyrightOutlinedIcon /> &nbsp;2022 Blumea
        </div>
      </div>
    </div>
  );
}

export default Footer;
