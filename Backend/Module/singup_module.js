import mongoose from 'mongoose';

const singupSchema = new mongoose.Schema({

    name : {
        type: String,
    },

    email : {
        type: String,
    },

    mobile : {
        type: Number,
    },

    password : {
        type: String,
    }
});

export default mongoose.model('SingUp', singupSchema);