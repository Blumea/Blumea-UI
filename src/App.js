import { React, useState, useEffect } from "react";
import TopBar from "./hoc/TopBar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Footer from "./hoc/Footer";
import { makeStyles } from "@mui/styles";
import UseCase from "./hoc/UseCase";
import Demo from "./components/Demo";
import NewNav from "./hoc/NewNav";
import Preloader from "./components/Preloader";
const useStyles = makeStyles({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const classes = useStyles();
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="gradient-background"
        >
          <Preloader />
        </div>
      ) : (
        <div className={classes.mainDiv}>
          {/* <TopBar /> */}
          <NewNav />
          <Home />
          {/* <Feature /> */}
          {/* <Demo /> */}
          <UseCase />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
