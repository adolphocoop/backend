import mongoose from 'mongoose'

const clientesSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    direction:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true 

}

);
export default mongoose.model('Cliente', clientesSchema)