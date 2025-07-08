import mongoose,{Schema,model} from "mongoose"

const paymentSchema = new Schema({
    school: {
        type: mongoose.Types.ObjectId,
        ref:"school",
        required: true
    },
    student: {
        type:mongoose.Types.ObjectId,
        ref:"student",
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