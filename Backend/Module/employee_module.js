import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({

    name : {
        type: String,
        require:true,
    },
    email : {
        type: String,
        require:true,
    },
    mobile : {
        type: Number,
        require:true,
    },
    address : {
        type: String,
        require:true,
    },
    department : {
        type: String,
        require:true,
    }
});

export default mongoose.model('Employee', employeeSchema);