import { React, useState } from "react";
import registration_image from "../Images/registration_image.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {
  // const Navigator = useNavigate();
  const intitial = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(intitial);
  const [errors, setErrors] = useState({});

  const InputChange = (events) => {
    const { name, value } = events.target;
    const tempDetails = { ...details, [name]: value };
    setDetails(tempDetails);
  };

  const onSubmitClick = (events) => {
    events.preventDefault();
    console.log("details:--", details);

    const Errors_checking = (InputValues) => {
      let errors = {};

      let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let trueEmail = InputValues.email;
      let validEmailregex = trueEmail.match(emailregex);

      if (InputValues.email === "") {
        errors.email = "Please Enter Your Email!";
      } else if (!validEmailregex) {
        errors.email = "Enter Valid Email!";
      }

      let passwordregex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#.$!^%*?&]{8,20}$/;
      let truePassword = InputValues.password;
      let validPassregex = truePassword.match(passwordregex);

      if (InputValues.password === "") {
        errors.password = "Please Enter Your Password!";
      } else if (!validPassregex) {
        errors.password =
        "Password must be in 8 - 20 character and containt atleast 1 Number, 1 Uppercase , 1 Lowercase & 1 Special character!";
      }
      setErrors(errors);
    };
    
    Errors_checking(details);
  };

  return (
    <>
      <div className="home_style">
        <img
          src={registration_image}
          alt="Registration Img"
          className="registration_img"
        />
        <Box
          className="registration_form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography id="text_home_regis">Welcome!</Typography>
          <Typography id="text_home">Login your account</Typography>
          <TextField
            id="login_email"
            type="email"
            name="email"
            label="Email ID"
            variant="outlined"
            className="input_field"
            required
            onChange={InputChange}
          />
          {errors.email ? <p className="clear_error">{errors.email}</p> : ""}
          <TextField
            id="login_password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className="input_field"
            required
            onChange={InputChange}
          />
          {errors.password ? (
            <p className="clear_error">{errors.password}</p>
          ) : (
            ""
          )}

          <Button variant="contained" id="submit_btn" onClick={onSubmitClick}>
            Login
          </Button>
          <Typography className="login_link">
            <Link to="" id="login_btn">
              Forgot your password?
            </Link>
          </Typography>
          <Typography className="login_link">
            <p>Don't have an account?</p>
            <Link to="/" id="login_btn">
              SingUp
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Login;