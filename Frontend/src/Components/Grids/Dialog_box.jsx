import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import swal from "sweetalert";
import axios from "axios";
import { APIs } from "../../API's/api";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const intitial = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    department: "",
  };

  const [details, setDetails] = useState(intitial);
  const [errors, setErrors] = useState({});
  const [errorNameBorder, setErrorNameBorder] = useState(false);
  const [errorEmailBorder, setErrorEmailBorder] = useState(false);
  const [errorMobileBorder, setErrorMobileBorder] = useState(false);
  const [errorAddressBorder, setErrorAddressBorder] = useState(false);
  const [errorDepartmentBorder, setErrorDepartmentBorder] = useState(false);

  const inputChange = (events) => {
    const { name, value } = events.target;
    const inputDetails = { ...details, [name]: value };
    setDetails(inputDetails);
    errorsValidator(details);
  };

  const errorsValidator = (inputValues) => {
    const errors = {};

    // Name Validation
    if (inputValues.name === "") {
      errors.name = "Please Enter Your Name!";
      setErrorNameBorder(true);
    } else if (inputValues.name.length < 3 || inputValues.name.length > 30) {
      errors.name = "Please Enter Name Between 3-30 Characters!";
      setErrorNameBorder(true);
    } else if (!isNaN(inputValues.name)) {
      errors.name = "Only Characters Allowed In Name!";
      setErrorNameBorder(true);
    } else {
      setErrorNameBorder(false);
    }

    // Email Validation
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmailregex = inputValues.email.match(emailregex);

    if (inputValues.email === "") {
      errors.email = "Please Enter Your Email!";
      setErrorEmailBorder(true);
    } else if (!validEmailregex) {
      errors.email = "Enter Valid Email!";
      setErrorEmailBorder(true);
    } else {
      setErrorEmailBorder(false);
    }

    // Mobile Validation
    if (inputValues.mobile === "") {
      errors.mobile = "Please Enter Your Mobile No.!";
      setErrorMobileBorder(true);
    } else if (isNaN(inputValues.mobile)) {
      errors.mobile = "Please Enter Valid Mobile No.!";
      setErrorMobileBorder(true);
    } else if (
      inputValues.mobile.length < 10 ||
      inputValues.mobile.length > 12
    ) {
      errors.mobile = "Please Enter 10-12 Digits No.!";
      setErrorMobileBorder(true);
    } else {
      setErrorMobileBorder(false);
    }

    // Address Validation
    if (inputValues.address === "") {
      errors.address = "Please Enter Your Address!";
      setErrorAddressBorder(true);
    } else {
      setErrorAddressBorder(false);
    }

    // Department Validation
    if (inputValues.department === "") {
      errors.department = "Please Enter Your Department!";
      setErrorDepartmentBorder(true);
    } else {
      setErrorDepartmentBorder(false);
    }

    setErrors(errors);
    return Object.entries(errors).length > 0;
  };

  const onSubmitClick = (events) => {
    const { name, email, mobile, address, department } = details;
    events.preventDefault();
    if(! name|| !email || !mobile || !address || !department ){
      return swal({
        title:"Enter All Required Details!"
      });
    }

    if (Object.entries(errors).length === 0) {
      // console.log("details:--", details);
      setOpen(false);
      swal({
        title: "Details Added Successfully On Employee Grid!",
        text: `
        Name: ${details.name}
        Email Address: ${details.email}
        Mobile No: ${details.mobile}
        Address: ${details.address}
        Department: ${details.department}
        `,
        icon: "success",
      });

      axios.post( APIs.addEmployeeApi , {
          name,
          email,
          mobile,
          address,
          department,
        })
        .then((response) => {
          // console.log("Details Added Successfully On Employee Grid!");
          // Reload_func();
          setInterval(() => {
            window.location.reload(false);
          }, 3000);
        })
        .catch((errors) => {
          // console.log(errors);
          swal({
            title: "Something went wrong!",
            text: "Please try again later...",
          });
        });
    }
  };

  return (
    <div>
      <Button variant="outlined" id="add_btn" onClick={handleClickOpen}>
        Add +
      </Button>
      <Dialog open={open} id="dialog_box">
        <DialogTitle>Add Details:-</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add details to this table, please enter your details here.
          </DialogContentText>
          <TextField
            required
            autoComplete="off"
            margin="dense"
            name="name"
            label="Enter Your Full Name..."
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChange}
            error={errorNameBorder}
          />
          {errors.name ? <p className="clear_error">{errors.name}</p> : ""}
          <TextField
            required
            autoComplete="off"
            margin="dense"
            name="email"
            label="Enter Your Email Address..."
            type="email"
            fullWidth
            variant="standard"
            onChange={inputChange}
            error={errorEmailBorder}
          />
          {errors.email ? <p className="clear_error">{errors.email}</p> : ""}
          <TextField
            required
            autoComplete="off"
            margin="dense"
            name="mobile"
            label="Enter Your Conatct No..."
            type="tel"
            fullWidth
            variant="standard"
            onChange={inputChange}
            error={errorMobileBorder}
          />
          {errors.mobile ? <p className="clear_error">{errors.mobile}</p> : ""}
          <TextField
            required
            autoComplete="off"
            margin="dense"
            name="address"
            label="Enter Your Address..."
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChange}
            error={errorAddressBorder}
          />
          {errors.address ? (
            <p className="clear_error">{errors.address}</p>
          ) : (
            ""
          )}
          <TextField
            required
            autoComplete="off"
            margin="dense"
            name="department"
            label="Enter Your Department..."
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChange}
            error={errorDepartmentBorder}
          />
          {errors.department ? (
            <p className="clear_error">{errors.department}</p>
          ) : (
            ""
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="dialog_btn">Cancel</Button>
          <Button onClick={onSubmitClick} className="dialog_btn">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
