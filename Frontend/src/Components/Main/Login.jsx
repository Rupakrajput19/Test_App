import { React, useState } from "react";
import registration_image from "../../Images/registration_image.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import swal from "sweetalert";
import { APIs } from "../../API's/api";

function Login() {
  const Navigator = useNavigate();
  const intitial = {
    email: "",
    password: "",
    // password: false,
  };
  const [details, setDetails] = useState(intitial);
  const [errors, setErrors] = useState({});
  const [errorEmailBorder , setErrorEmailBorder] = useState(false);
  const [errorPasswordBorder , setErrorPasswordBorder] = useState(false);

  const inputChange = (events) => {
    const { name, value } = events.target;
    const tempDetails = { ...details, [name]: value };
    setDetails(tempDetails);
    errorsValidator(details);
    // setErrorBorder(true)
  };

  const handleClickShowPassword = () => {
    setDetails({
      ...details, 
      password : !details.password,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }
 
  const errorsValidator = (inputValues) => {
    const errors = {};

 // Email Validation
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmailregex = (inputValues.email).match(emailregex);

    if (inputValues.email === "") {
      errors.email = "Please Enter Your Email!";
      setErrorEmailBorder(true)
    } else if (!validEmailregex) {
      errors.email = "Enter Valid Email!";
      setErrorEmailBorder(true)
    }
    else{
      setErrorEmailBorder(false);
    }

     // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#.$!^%*?&]{8,20}$/;
    const validPassworsRegex = (inputValues.password).match(passwordRegex);

    if (inputValues.password === "") {
      errors.password = "Please Enter Your Password!";
      setErrorPasswordBorder(true)
    } else if (!validPassworsRegex) {
      errors.password =
      "Password must be in 8 - 20 character and containt atleast 1 Number, 1 Uppercase , 1 Lowercase & 1 Special character!";
      setErrorPasswordBorder(true)
    }
    else{
      setErrorPasswordBorder(false);
    }
    setErrors(errors);
    return Object.entries(errors).length > 0;
  };

  const onSubmitClick = (events) => {
    const { email, password } = details;
    events.preventDefault();
    if (!email || !password) {
      return swal({title:"Enter All Required Details!"})
    }
    if (Object.entries(errors).length === 0) {
      // setErrorBorder(false)
      // console.log("details:--", details);
      axios.post(APIs.loginUserApi, { email, password })
        .then((result) => {
          // console.log("Response from backend -> ", result);
          // swal({
          //   title: "Something went wrong!",
          //   text: result.data.message,
          // });
          if (result.data && result.data.success) {
            Navigator("/home", { replace: true });
          } else {
            setDetails(intitial);
            return swal({
              title: "Login Failed!",
              text: `"Invalid login credentials..." \n 'If you are new user please first registered your self.'`,
              icon: "error",
              button: "Try Again",
            });
            // return swal({
            //   title: "Something went wrong!",
            //   text: result.data.message,
            // });
            // reload_func();
          }
        })
        .catch((error) => {
          swal({
            title: "Something went wrong!",
            text: "Please try again later...",
          });
        });
    }
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
          autoComplete = "off"
        >
          <Typography id="text_home_regis">Welcome!</Typography>
          <Typography id="text_home">Login your account</Typography>
          <div>
          <TextField
            id="login_email"
            type="email"
            name="email"
            label="Email ID"
            variant="outlined"
            className="input_field"
            value={details.email}
            required
            onChange={inputChange}
            error={errorEmailBorder}
          />
          {errors.email ? <p className="clear_error">{errors.email}</p> : ""}
          </div>
          <div>
          <TextField
            id="login_password"
            // type="text"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className="input_field"
            value={details.password}
            required
            onChange={inputChange}
            error={errorPasswordBorder}
            />
            <IconButton 
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end">
              {details.password ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          {errors.password ? (
            <p className="clear_error">{errors.password}</p>) : ("")}
            </div>

            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={details.showPassword ? 'text' : 'password'}
            value={details.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}

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
            <Link to="/signup" id="login_btn">
              SingUp
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Login;