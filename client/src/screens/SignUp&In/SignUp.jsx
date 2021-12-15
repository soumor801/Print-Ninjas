import Layout from "../../components/Layout";
import { TextField, Button } from "@mui/material";
import App from "../../App";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import SignUpCSS from ".././SignUp&In/SignUp.css";

const SignUp = ({ handleOpen, handleClose, handleRegister }) => {
  // set state for form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  // styling for form
  const theme = createTheme();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "300px",
      },
      "& .MuiButtonBase-root": {
        margin: theme.spacing(2),
      },
    },
  }));
  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
      <div className="form-sign-up">
        <h1>Sign Up here!</h1>
        <form
          className="sign-up-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <TextField
            label=" Username"
            variant="filled"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="filled"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            variant="filled"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
          <div className="button-wrapper">
            <Button variant="contained">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      </div>

  );
};
export default SignUp;
