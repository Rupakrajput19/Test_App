import { React, useState } from "react";
import registration_image from "../../Images/registration_image.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { APIs } from "../../API's/api";

function Login() {
  const Navigator = useNavigate();
  const intitial = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(intitial);
  const [errors, setErrors] = useState({});
  // const [errorBorder , setErrorBorder] = useState(false);
  const [errorNameBorder , setErrorNameBorder] = useState(false);
  const [errorEmailBorder , setErrorEmailBorder ] = useState(false);
  const [errorMobileBorder , setErrorMobileBorder] = useState(false);
  const [errorPasswordBorder , setErrorPasswordBorder] = useState(false);
  const [errorConfirmPasswordBorder , setErrorConfirmPasswordBorder] = useState(false);

  const inputChange = (events) => {
    const { name, value } = events.target;
    const tempDetails = { ...details, [name]: value };
    setDetails(tempDetails);
    errorsValidator(details);
  };
  const errorsValidator = (inputValues) => {
    const errors = {};

     // Name Validation
    if (inputValues.name === "") {
      errors.name = "Please Enter Your Name!";
      setErrorNameBorder(true)
    } else if (inputValues.name.length < 3 || inputValues.name.length > 30) {
      errors.name = "Please Enter Name Between 3-30 Characters!";
      setErrorNameBorder(true)
    } else if (!isNaN(inputValues.name)) {
      errors.name = "Only Characters Allowed In Name!";
      setErrorNameBorder(true)
    }else{
      setErrorNameBorder(false)
    }

 // Email Validation
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmailregex = (inputValues.email).match(emailregex);

    if (inputValues.email === "") {
      errors.email = "Please Enter Your Email!";
      setErrorEmailBorder(true)
    } else if (!validEmailregex) {
      errors.email = "Enter Valid Email!";
      setErrorEmailBorder(true)
    }else{
      setErrorEmailBorder(false)
    }

     // Mobile Validation
    if (inputValues.mobile === "") {
      errors.mobile = "Please Enter Your Mobile No.!";
      setErrorMobileBorder(true)
    } else if (isNaN(inputValues.mobile)) {
      errors.mobile = "Please Enter Only Numbers!";
      setErrorMobileBorder(true)
    } else if ((inputValues.mobile.length < 10) || (inputValues.mobile.length > 12)) {
      errors.mobile = "Please Enter 10-12 Digits No.!";
      setErrorMobileBorder(true)
    }else{
      setErrorMobileBorder(false)
    }

     // Password Validation
    const passwordregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#.$!^%*?&]{8,20}$/;
    const validPassregex = (inputValues.password).match(passwordregex);

    if (inputValues.password === "") {
      errors.password = "Please Enter Your Password!";
      setErrorPasswordBorder(true)
    } else if (!validPassregex) {
      errors.password =
        "Password must be in 8 - 20 character and containt atleast 1 Number, 1 Uppercase , 1 Lowercase & 1 Special character!";
        setErrorPasswordBorder(true)
    }else{
      setErrorPasswordBorder(false)
    }

     // Confirm Password Validation
    if (inputValues.confirm_password === "") {
      errors.confirm_password = "Please Enter Your Confirm Password!";
      setErrorConfirmPasswordBorder(true)
    } else if (!(inputValues.confirm_password === inputValues.password)) {
      errors.confirm_password = "Confirm Password Must Be Same As Above Password!";
      setErrorConfirmPasswordBorder(true)
    }
    setErrors(errors)
    return Object.entries(errors).length > 0;
  };


  const onSubmitClick = (events) => {
    const { name, email, mobile, password, confirm_password} = details;
    events.preventDefault();
    if (!name || !email|| !mobile || !password || !confirm_password) {
      return swal({title: "Enter All Required Details!"})
    }
    // errorsValidator(details);
    if(Object.entries(errors).length === 0){
      // console.log("details:--", details);
    axios.post(APIs.addUserApi , {name, email, mobile, password}).then((response) => {
      // console.log("Registration Succesfull")
      Navigator("/", {replace : "true"});
    })
    .catch((errors) => {
      swal({
        title: "Something went wrong!",
        text: "Please try again later...",
      });
    })
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
          autoCompconste="off"
        >
          <Typography id="text_home_regis">Welcome!</Typography>
          <Typography id="text_home">SingUp your account</Typography>
          <TextField
            id="standard-adornment-name"
            type="name"
            name="name"
            label="Name "
            variant="outlined"
            className="input_field"
            required = "true"
            autoComplete = "off"
            onChange={inputChange}
            error={errorNameBorder}
          />
          {errors.name ? <p className="clear_errors">{errors.name}</p> : ""}
          <TextField
            id="standard-adornment-email"
            type="email"
            name="email"
            label="Email ID"
            variant="outlined"
            className="input_field"
            required = "true"
            autoComplete = "off"
            onChange={inputChange}
            error={errorEmailBorder}
          />
          {errors.email ? <p className="clear_errors">{errors.email}</p> : ""}
          <TextField
            id="standard-adornment-mobile"
            type="tel"
            name="mobile"
            label="Mobile"
            variant="outlined"
            className="input_field"
            required = "true"
            autoComplete = "off"
            onChange={inputChange}
            error={errorMobileBorder}
          />
          {errors.mobile ? <p className="clear_errors">{errors.mobile}</p> : ""}
          <TextField
            id="standard-adornment-password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className="input_field"
            required = "true"
            autoComplete = "off"
            onChange={inputChange}
            error={errorPasswordBorder}
          />
          {errors.password ? (
            <p className="clear_errors">{errors.password}</p>) : ("")}
          <TextField
            id="standard-adornment-confirm_password"
            type="password"
            name="confirm_password"
            label="Confirm Password"
            variant="outlined"
            className="input_field"
            required = "true"
            autoComplete = "off"
            onChange={inputChange}
            error={errorConfirmPasswordBorder}
          />
          {errors.confirm_password ? (
            <p className="clear_errors">{errors.confirm_password}</p>) : ("")}
          <Button variant="contained" id="submit_btn" onClick={onSubmitClick}>
            Submit
          </Button>
          <Typography className="login_link">
            <p>Already have an account?</p>
            <Link to="/" id="login_btn">
              Login
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Login;
