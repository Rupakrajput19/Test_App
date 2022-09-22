import express from "express";

import { addUser, getUser, loginUser} from '../Controlller/singup_controller.js';
import { addEmployee, getEmployee, updateEmployee, deleteEmployee } from '../Controlller/employee_controller.js';

const router = express.Router();

router.post('/addUser', addUser );

router.get('/getUser', getUser);

router.post('/loginUser', loginUser);

router.post('/addEmployee', addEmployee);

router.get('/getEmployee', getEmployee);

router.put('/updateEmployee', updateEmployee);

router.delete('/deleteEmployee/:id', deleteEmployee);

export default router;