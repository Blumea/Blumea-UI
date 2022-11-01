import React from "react";
import { makeStyles } from "@mui/styles";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Logo from "../assets/BG-Edit.png";
const useStyes = makeStyles({
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
    fontSize: "24px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
});
function Navbar() {
  const classes = useStyes();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.contentSection}>
        <div className={classes.brandPlate}>
          <img src={Logo} alt="Logo" width="40px" />
          &nbsp;Blumea
        </div>
        <div className={classes.primaryLinks}>
          <a>Documentation</a>
          <a>Tutorial</a>
          <a>Blog</a>
        </div>
        <div className={classes.secondaryLinks}>
          <a>v1.0.01</a>
          <a>
            GitHub&nbsp;
            <OpenInNewOutlinedIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
