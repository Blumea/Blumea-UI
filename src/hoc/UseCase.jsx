import React from "react";
import { makeStyles } from "@mui/styles";
import ImportImage from "../assets/import.svg";
import SampleCase from "../assets/SampleUse.svg";
const useStyles = makeStyles({
  mainDiv: {
    maxWidth: "1200px",
    width: "100%",
    margin: "40px",
    padding: "50px 10px",
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
            <span className={classes.HighLight}>Faster</span> results
          </h1>
          <p>
            Using hash tables and similar data structures to store the data,
            blumea can successfully retrieve data for any query with a constant
            time complexity every time without failing.
          </p>
        </div>
      </div>
      <div className={classes.UseCaseDiv}>
        <div className={classes.TextDiv}>
          <h1>
            <span className={classes.HighLight}>Reliable</span> to use
          </h1>
          <p>
            Provides an accurate result for every query. It uses a number of
            structures like counters, hashing, and partitioning to reduce the
            chances of false positives for the queries, making it very reliable.
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
            <span className={classes.HighLight}>Efficient</span> to use
          </h1>
          <p>
            Enables the user to store data and retrieve it efficiently. No
            matter how big the data is, blumea ensures to provide quick query
            results efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCase;
