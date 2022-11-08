import React from "react";
import TopBar from "./hoc/TopBar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Footer from "./hoc/Footer";
import { makeStyles } from "@mui/styles";
import UseCase from "./hoc/UseCase";
import Demo from "./components/Demo";
import NewNav from "./hoc/NewNav";
const useStyles = makeStyles({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      {/* <TopBar /> */}
      <NewNav />
      <Home />
      <Feature />
      <Demo />
      <UseCase />
      <Footer />
    </div>
  );
}

export default App;
