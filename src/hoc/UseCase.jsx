import React from "react";
import { makeStyles } from "@mui/styles";
import ImportImage from "../assets/import.svg";
import SampleCase from "../assets/SampleUse.svg";
const useStyles = makeStyles({
  mainDiv: {
    maxWidth: "1200px",
    width: "100%",
    margin: "40px",
  },
  ImportDiv: {
    display: "grid",
    gridTemplateColumns: "60% 30%",
    justifyContent: "space-between",
    margin: "50px 0px 0px",
    "& h1": {
      fontSize: "50px",
    },
    "& p": {
      fontSize: "20px",
    },
    "@media (max-width: 1259px)": {
      gridTemplateColumns: "auto",
      justifyContent: "center",
      // alignItems: "center",
      margin: "5px 0px 5px",
    },
  },
  UseCaseDiv: {
    display: "grid",
    gridTemplateColumns: "30% 60%",
    justifyContent: "space-between",
    margin: "50px 0px 0px",
    "& h1": {
      fontSize: "50px",
    },
    "& p": {
      fontSize: "20px",
    },
    "@media (max-width: 1259px)": {
      gridTemplateColumns: "auto",
      justifyContent: "center",
      margin: "20px 0px 80px",
    },
  },
  HighLight: {
    color: "#29caa5",
  },
  TextDiv: {
    "@media (max-width: 1259px)": {
      order: -1,
      "& h1": {
        textAlign: "center",
      },
      "& p": {
        textAlign: "center",
      },
    },
    "@media (max-width: 1259px)": {
      order: -1,
      "& h1": {
        textAlign: "center",
        fontSize: "40px",
      },
      "& p": {
        textAlign: "center",
      },
    },
  },
  headingDiv: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // fontFamily: "inter",
    fontSize: "4rem",
    fontWeight: "800",
    "@media (max-width: 800px)": {
      fontSize: "2rem",
      fontWeight: "800",
    },
  },
});
function UseCase() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv} id="features">
      <div className={classes.headingDiv}>
        <p>
          EXPLORE THE{" "}
          <span style={{ color: "#29caa5", textDecoration: "underline" }}>
            {" "}
            BLUMEA
          </span>{" "}
          WAY
        </p>
      </div>
      <div className={classes.ImportDiv}>
        <div className={classes.ImageDiv}>
          <img src={ImportImage} alt="Import" width="100%" />
        </div>
        <div className={classes.TextDiv}>
          <h1>
            <span className={classes.HighLight}>Easy</span> to Import
          </h1>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </p>
        </div>
      </div>
      <div className={classes.UseCaseDiv}>
        <div className={classes.TextDiv}>
          <h1>
            <span className={classes.HighLight}>Simple</span> Structure
          </h1>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </p>
        </div>
        <div className={classes.ImageDiv}>
          <img src={SampleCase} alt="Import" width="100%" />
        </div>
      </div>
      <div className={classes.ImportDiv}>
        <div className={classes.ImageDiv}>
          <img src={ImportImage} alt="Import" width="100%" />
        </div>
        <div className={classes.TextDiv}>
          <h1>
            <span className={classes.HighLight}>Easy</span> to Import
          </h1>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCase;
