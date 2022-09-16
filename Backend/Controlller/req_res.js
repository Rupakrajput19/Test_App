import SingUp from "../Module/singup_module.js";

export const addUser = (req, res) => {
  const { name, email, mobile, password } = req.body;
  const saveData = new SingUp({
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  });
  saveData
  .save()
  .then((result) => {
      res.json({message :"Data save successfully..", result});
    })
    .catch((error) => {
        res.json({message: "Something went wrong..", error});
    });
};



export const getUser = (req, res) => {
    SingUp.find()
    .then((result) => {
      res.json({ message: "Data fetched successfully", result });
    })
    .catch((error) => {
      res.json({ message: "Something went wrong.", error});
    });
};


export const loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log("User details:", { email : email});

  SingUp.find({ email : email, password: password })
    .exec()
    .then((result) => {
      if ((result.length) > 0) {
        res.json({ message: "User loging..", success: true});
      }
      else {
        res.json({ message: "Invalid details..", success: false});
      }
    })
    .catch((error) => {
      res.json({ message: "Something went wrong.", error});
    });
};