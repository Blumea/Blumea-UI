import React from "react";
import { makeStyles } from "@mui/styles";
const useStyes = makeStyles({
  mainDiv: {
    backgroundColor: "#16181d",
    width: "100%",
    height: "50px",
  },
});
function TopBar() {
  const classes = useStyes();
  return <div className={classes.mainDiv}></div>;
}

export default TopBar;
