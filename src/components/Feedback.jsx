import { makeStyles } from "@mui/styles";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyes = makeStyles({
  mainDiv: {
    margin: "0px 0px",
    backgroundColor: "#E5E4E2",
    width: "100%",
    minHeight: "100vh",
    display: "grid",
    // gridTemplateColumns: "auto auto auto",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1259px)": {
      // maxWidth: "800px",
      gridTemplateColumns: "auto auto",
    },
    "@media (max-width: 865px)": {
      // maxWidth: "500px",
      gridTemplateColumns: "auto",
      justifyContent: "center",
    },
    "@media (max-width: 565px)": {
      // margin: "30px 0px",
    },
  },
  formDiv: {
    width: "800px",
    height: "auto",
    fontWeight: "600",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "10px",
    textAlign: "center",
    justifyItems: "center",
    // alignContent: "center",
    flexDirection: "column",
    "@media (max-width: 865px)": {
      margin: "0px 0px 30px",
      width: "400px",
    },
    "@media (max-width: 425px)": {
      width: "300px",
    },
  },
  header: {
    color: "#29caa5",
    fontWeight: 800,
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: "1rem",
    display: "flex",
    color: "#7F8487",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },

  subDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "10px",
    fontSize: "1.1rem",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    fontSize: "1.1rem",
    padding: "10px",
    justifyContent: "space-between",
    // backgroundColor: "green",
    // alignItems: "left",
  },
  inputField: {
    margin: "10px",
    border: "solid 1px black",
    borderRadius: "10px",
    height: "30px",

    // alignItems: "left",
  },
  feedbackButton: {
    backgroundColor: "black",
    width: "100px",
    border: "none",
    color: "white",
    height: "40px",
    padding: "10px",
    fontWeight: "600",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
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
export default function Feedback() {
  const [name, setnameboolean] = useState(false);
  const [email, setemailboolean] = useState(false);
  const [message, setmessageboolean] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredemail, setEnteredemail] = useState("");
  const [enteredmessage, setEnteredmessage] = useState("");

  const form = useRef();

  const isentername = (event) => {
    if (event.target.value.trim().length > 0) {
      setnameboolean(true);
    } else {
      setnameboolean(false);
    }
    setEnteredUsername(event.target.value);
  };

  const isenteremail = (event) => {
    if (event.target.value.trim().length > 0) {
      setemailboolean(true);
    } else {
      setemailboolean(false);
    }
    setEnteredemail(event.target.value);
  };
  const isentermessage = (event) => {
    if (event.target.value.trim().length > 0) {
      setmessageboolean(true);
    } else {
      setmessageboolean(false);
    }
    setEnteredmessage(event.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs
        .sendForm(
          "service_fnf7239",
          "template_lkrv7jh",
          form.current,
          "user_H34d8USbcfa1e9x5idUsk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setEnteredUsername("");
    setEnteredemail("");
    setEnteredmessage("");
  };

  const classes = useStyes();
  const [payload, setPayload] = React.useState(null);

  return (
    <div className={classes.mainDiv}>
      <form ref={form} onSubmit={sendEmail} className={classes.formDiv}>
        <h1 className={classes.header}>Feedback</h1>
        <p className={classes.text}>
          Thank you for taking time to provide feedback. We appreciate hearing
          from you and will review commments carefully
        </p>
        <h3>Would you recommend this to your friends and colleagues ? </h3>
        <div className={classes.subDiv}>
          <div>
            <input type="radio" id="yes" name="response" value="Yes" /> {" "}
            <label for="yes">Yes</label>
          </div>
          <div>
              <input type="radio" id="no" name="response" value="No" /> {" "}
            <label for="no">No</label>
          </div>
        </div>
        <div className={classes.inputDiv}>
          <label>Name</label>
          <input
            name="user_name"
            className={classes.inputField}
            type="text"
            placeholder="👩🏻"
            value={enteredUsername}
            onChange={isentername}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className={classes.inputField}
            placeholder="📧"
            value={enteredemail}
            onChange={isenteremail}
          />
          <label>
            Do you have any suggestions to improve our product and service?
          </label>
          <textarea
            name="message"
            className={classes.inputField}
            placeholder="📨"
            rows={3}
            value={enteredmessage}
            onChange={isentermessage}
          />
        </div>
        <Button
          type="submit"
          className={classes.feedbackButton}
          sx={{
            ":hover": {
              bgcolor: "#29caa5",
              color: "white",
            },
            bgcolor: "black",
            color: "white",
            fontWeight: "600",
          }}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
