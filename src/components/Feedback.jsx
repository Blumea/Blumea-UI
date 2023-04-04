import React from "react";
import { makeStyles } from "@mui/styles";

const useStyes = makeStyles({
  mainDiv: {
    margin: "0px 0px",
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh",
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
    "@media (max-width: 565px)": {
      margin: "30px 0px",
    },
  },
  //   featureDiv: {
  //     width: "380px",
  //     height: "250px",
  //     "@media (max-width: 865px)": {
  //       margin: "0px 0px 30px",
  //     },
  //     "@media (max-width: 425px)": {
  //       width: "330px",
  //     },
  //   },
  //   featureHeading: {
  //     // color: "#87929b",
  //     color: "#106458",
  //     fontSize: "28px",
  //     fontWeight: 500,
  //     marginBottom: "20px",
  //   },
  //   Desc: {
  //     fontSize: "18px",
  //     fontWeight: 350,
  //   },
});
export default function Feedback() {
  const classes = useStyes();
  const [payload, setPayload] = React.useState(null);

  return (
    <div className={classes.mainDiv}>
      <p>Hii</p>
    </div>
  );
}
