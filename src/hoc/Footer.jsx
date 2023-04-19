import React from "react";
import { makeStyles } from "@mui/styles";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { Routes, Route, useNavigate } from "react-router-dom";
import Feedback from "../components/Feedback";
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
  const navigate = useNavigate();

  const navigateToFeedback = () => {
    navigate("/feedback");
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.topBar}>
        <div className={classes.hyperlinkDiv}>
          {/* <button className={classes.baseButton}>Get Started</button> */}
          <ThemeProvider theme={theme}>
            <Button
              href="https://www.npmjs.com/package/blumea"
              variant="contained"
              size="large"
              color="custom"
              sx={{
                margin: "10px 5px 10px 5px",
              }}
            >
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
                href="https://docs-blumea.vercel.app/"
                variant="outlined"
                sx={{
                  margin: "10px 5px 10px 5px",
                  // padding: "7px",
                }}
                size="large"
                endIcon={<NavigateNextOutlinedIcon />}
                color="custom"
              >
                Take a tour
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
            Blumea makes it easy for anyone to implement data lookup and storage
            through a plentitude of data. No matter how big the data is, Blumea
            will ensure that you will get the results to your
            needle-in-a-haystack searches quickly and efficiently.
          </p>
        </div>
      </div>
      <div className={classes.copyRight}>
        <div className={classes.innerDiv}>
          Copyright&nbsp; <CopyrightOutlinedIcon /> &nbsp;2024 Blumea
        </div>
      </div>
      {/* <Routes>
        <Route path="/#/feedback" element={<Feedback />} />
      </Routes> */}
    </div>
  );
}

export default Footer;
