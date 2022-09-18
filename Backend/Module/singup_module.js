import mongoose from 'mongoose';

const singupSchema = new mongoose.Schema({

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

    password : {
        type: String,
        require:true,
    }
});

export default mongoose.model('SingUp', singupSchema);