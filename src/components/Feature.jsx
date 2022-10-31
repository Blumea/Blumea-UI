import React from "react";
import { makeStyles } from "@mui/styles";
import featureData from "../data/Feature.js";
const useStyes = makeStyles({
  mainDiv: {
    margin: "100px 0px",
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1259px)": {
      maxWidth: "800px",
      gridTemplateColumns: "auto auto",
    },
    "@media (max-width: 865px)": {
      maxWidth: "500px",
      gridTemplateColumns: "auto",
      justifyContent: "center",
    },
  },
  featureDiv: {
    width: "380px",
    "@media (max-width: 865px)": {
      margin: "0px 0px 30px",
    },
    "@media (max-width: 425px)": {
      width: "330px",
    },
  },
  featureHeading: {
    color: "#87929b",
    fontSize: "28px",
    fontWeight: 300,
    marginBottom: "20px",
  },
  Desc: {
    fontSize: "18px",
    fontWeight: 350,
  },
});

function Feature() {
  const classes = useStyes();
  return (
    <div className={classes.mainDiv}>
      {featureData.map((feature) => {
        return (
          <div className={classes.featureDiv}>
            <div className={classes.featureHeading}>{feature.title}</div>
            <div className={classes.Desc}>{feature.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Feature;
