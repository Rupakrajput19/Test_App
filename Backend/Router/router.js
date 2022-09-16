import express from "express";

import { addUser, getUser, loginUser} from '../Controlller/req_res.js';

const router = express.Router();

router.post('/addUser', addUser );

router.get('/getUser', getUser);

router.post('/loginUser', loginUser);

export default router;