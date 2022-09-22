import Employee from "../Module/employee_module.js";


export const addEmployee = (req, res) => {
    const { name, email, mobile, address, department } = req.body;
    if(!name || !email || !mobile || !address || !department){
      res.send("Invalid/Incompelete Employee data formate!");
    }
    const save_employee_data = new Employee({
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      department: department,
    });
    save_employee_data
    .save()
    .then((result) => {
        res.json({message :"Employee Data save successfully..", result});
      })
      .catch((error) => {
          res.json({message: "Something went wrong..", error});
      });
  };
  
  export const getEmployee = (req, res) => {
    console.log("GetAPI",);
      // Employee.findById({ _id : req.query.id })
      Employee.find({})
        .then((result) => {
          res.json({ message: "Employee's Data fetched successfully", data: result, success: true });
        })
        .catch((error) => {
          res.json({ message: "Something went wrong.", error, success: false });
        });
    };


  export const updateEmployee = (req, res) => {
      console.log("UpdateAPI", req.params);
      Employee.findByIdAndUpdate({ _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address,
            department: req.body.department,
          },
        }
      )
        .then(() => {
          res.send({ message: "Employee details updated Sucessfully" });
        })
        .catch((err) => {
          res.send({ message: "Employee details not found.", error: err });
        });
    };
  

  export const deleteEmployee = (req, res) => {
      console.log("deleteAPI", { _id: req.params.id });
      // Employee.deleteMany({})
      Employee.findByIdAndDelete({ _id: req.params.id })
        .then(() => {
          res.send({ message: "Employee details deleted Sucessfully." });
        })
        .catch((err) => {
          res.send({ message: "Employee details not found.", error: err });
        });
    };



    
