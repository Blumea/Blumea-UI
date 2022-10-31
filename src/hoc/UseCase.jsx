import React from "react";
import { makeStyles } from "@mui/styles";
import ImportImage from "../assets/import.svg";
import SampleCase from "../assets/SampleUse.svg";
const useStyles = makeStyles({
  mainDiv: {
    maxWidth: "1200px",
    width: "100%",
  },
  ImportDiv: {
    display: "grid",
    gridTemplateColumns: "60% 30%",
    justifyContent: "space-between",
    margin: "50px 0px 100px",
    "& h1": {
      fontSize: "50px",
    },
    "& p": {
      fontSize: "20px",
    },
    "@media (max-width: 1259px)": {
      gridTemplateColumns: "auto",
    },
  },
  UseCaseDiv: {
    display: "grid",
    gridTemplateColumns: "30% 60%",
    justifyContent: "space-between",
    margin: "50px 0px 150px",
    "& h1": {
      fontSize: "50px",
    },
    "& p": {
      fontSize: "20px",
    },
    "@media (max-width: 1259px)": {
      gridTemplateColumns: "auto",
    },
  },
  HighLight: {
    color: "#4BF7CB",
  },
});
function UseCase() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
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
    </div>
  );
}

export default UseCase;
