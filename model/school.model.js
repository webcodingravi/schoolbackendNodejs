import {Schema, model} from "mongoose"
import bcrypt from 'bcrypt'

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    dirName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: { type: String },

    tagline: { type: String },

    estd: { type: Number },

    regNo: { type: String },
    
    address: { type: String },

    city: { type: String },

    state: { type: String },

    country: { type: String },

    pincode: { type: Number }
}, {timestamps: true})


schoolSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password.toString(), 12)
    next()
})

const SchoolModel = model("School", schoolSchema)
export default SchoolModel