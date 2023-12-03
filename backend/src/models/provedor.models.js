import mongoose from 'mongoose';

const provedorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true

    },
    direction:{
        type: String,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    }
    
},{
    timestamps: true
    
});
export default mongoose.model('Provedor' , provedorSchema)