import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import debounce from "lodash.debounce";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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
const useStyles = makeStyles({
  mainDiv: {
    // backgroundColor: "#32363e",
    width: "100%",
    marginBottom: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 565px)": {
      marginBottom: "0px",
    },
  },
  HeaderSection: {
    width: "100%",
    marginBottom: "50px",
    maxWidth: "1200px",
    "@media (max-width: 1259px)": {
      maxWidth: "800px",
      gridTemplateColumns: "auto",
    },
    "@media (max-width: 865px)": {
      maxWidth: "500px",
      justifyContent: "center",
    },
    "@media (max-width: 565px)": {
      margin: "30px 0px",
    },
  },
  mainOne: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#32363e",
    "@media (max-width: 565px)": {
      margin: "0px 30px",
    },
  },
  mainTwo: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#29caa5",
    "@media (max-width: 565px)": {
      margin: "0px 30px",
    },
  },
  subDiv: {
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "80px",
    flexDirection: "column",
    justifyContent: "spce-between",
    alignItems: "center",
    "@media (max-width: 1259px)": {
      maxWidth: "800px",
      gridTemplateColumns: "auto",
    },
    "@media (max-width: 865px)": {
      maxWidth: "500px",
      // justifyContent: "center",
    },
    "@media (max-width: 565px)": {
      margin: "30px 0px",
      gridGap: "20px",
    },
  },
  searchSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  textDiv: {
    alignItems: "center",
    height: "100px",
    width: "100%",
    "@media (max-width: 565px)": {
      width: "90%",
    },
  },
});
function Demo() {
  const [action, setAction] = React.useState("create");
  const [filter, setFilter] = React.useState("type2");
  const [value, setValue] = React.useState("");
  const [user, setUser] = React.useState("");
  const [statusCode, setStatusCode] = React.useState(0);
  const [helperMessage, setHelperMessage] = React.useState("");
  const [message, setMessage] = React.useState("User Created Successfully");
  const [messageCode, setMessageCode] = React.useState("success");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setUser(value);
    setHelperMessage("");
    setStatusCode(0);
  }, [value]);
  useEffect(() => {
    if (value !== "" && action!=="search") {
      backendSearch(value);
    }
  }, [user]);
  const backendSearch = useCallback(
    debounce(async (val) => {
      const response = await fetch(
        `https://blumea-serverless.vercel.app/bloomfilter/search?item=${val}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.data.isfound === true) {
            setStatusCode(2);
            setHelperMessage(`${val} already exists`);
          } else {
            setStatusCode(1);
            setHelperMessage(`${val} is available`);
          }
        });
    }, 500),
    []
  );
  const handleClick = () => {
    if (action === "create") {
      if (statusCode === 1) {
        fetch(
          `https://blumea-serverless.vercel.app/bloomfilter/create?item=${value}`
        )
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            if (json.status === 201) {
              setMessageCode("success");
              setMessage("User Created Successfully");
              setOpen(true);
              setStatusCode(0);
              setHelperMessage("");
              setValue("");
              setUser("");
            } else {
            }
          });
      } else {
        setMessageCode("error");
        setMessage("User Creation Failed");
        setOpen(true);
        setStatusCode(0);
        setHelperMessage("");
        setValue("");
        setUser("");
      } // do nothing
    } else {
      fetch(
        `https://blumea-serverless.vercel.app/bloomfilter/search?item=${value}`
      )
        .then((res) => res.json())
        .then((json) => {
          if (json.data.isfound === true) {
            setMessageCode("success");
            setMessage("User Found");
            setOpen(true);
            setStatusCode(0);
          }
          else
          {
            setMessageCode("error");
            setMessage("User Not Found");
            setOpen(true);
            setStatusCode(0);
          }
        });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.mainDiv}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={messageCode}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <div className={classes.HeaderSection}>
        <div className={classes.mainOne}>Wanna try this out?</div>
        <div className={classes.mainTwo}>See it in Action</div>
      </div>
      <div className={classes.subDiv}>
        <div className={classes.selectDiv}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose Action
            </FormLabel>
            <ThemeProvider theme={theme}>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="create"
              >
                <FormControlLabel
                  value="create"
                  control={<Radio color="custom" />}
                  label="Create"
                  onClick={() => setAction("create")}
                />
                <FormControlLabel
                  value="search"
                  control={<Radio color="custom" />}
                  label="Search"
                  onClick={() => {
                    setAction("search");
                    setStatusCode(0);
                    setHelperMessage("");
                    setValue("");
                    setUser("");
                  }}
                />
              </RadioGroup>
            </ThemeProvider>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose Filter Type
            </FormLabel>
            <ThemeProvider theme={theme}>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="type2"
              >
                <FormControlLabel
                  value="type1"
                  control={<Radio color="custom" />}
                  label="Type 1"
                />
                <FormControlLabel
                  value="type2"
                  control={<Radio color="custom" />}
                  label="Type 2"
                />
                <FormControlLabel
                  value="type3"
                  control={<Radio color="custom" />}
                  label="Type 3"
                />
                <FormControlLabel
                  value="type4"
                  control={<Radio color="custom" />}
                  label="Type 4"
                />
              </RadioGroup>
            </ThemeProvider>
          </FormControl>
        </div>
        <div className={classes.searchSection}>
          <div className={classes.textDiv}>
            <TextField
              fullWidth
              sx={{ margin: "20px 0px" }}
              FormHelperTextProps={{
                style: {
                  color:
                    statusCode === 1
                      ? "green"
                      : statusCode === 2
                      ? "red"
                      : "grey",
                  fontWeight: "bold",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              color={
                statusCode === 1
                  ? "success"
                  : statusCode === 2
                  ? "error"
                  : "grey"
              }
              label="Type here to search"
              helperText={helperMessage}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="large"
              color="custom"
              onClick={handleClick}
              disabled={
                statusCode === 1 ? false : action !== "search" ? true : false
              }
            >
              {action === "search" ? "Search User" : "Create User"}
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Demo;
