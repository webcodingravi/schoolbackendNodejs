import mongoose,{Schema,model} from "mongoose"

const paymentSchema = new Schema({
    school: {
        type: mongoose.Types.ObjectId,
        ref:"School",
        required: true
    },
    student: {
        type:mongoose.Types.ObjectId,
        ref:"Student",
        required:true
    },
    fee : {
        type: Number,
        required:true
    },
    feeDate : {
        type: Date,
        required:true
    }

},{timestamps:true})


const PaymentModel = model("Payment",paymentSchema)
export default PaymentModel