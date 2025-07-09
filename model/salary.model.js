import mongoose, {Schema,model} from "mongoose"

const salarySchema = new Schema({
    school :{
      type: mongoose.Types.ObjectId,
      required:true,
      ref:"School"
    },
    employeeName: {
        type:String,
        required:true
    },
    salary: {
        type:Number,
        required:true
    },
    description: {
        type:String
    },
    salaryDate: {
        type:Date,
        required:true,
    }
},{timestamps: true})

const SalaryModel = model("Salary",salarySchema)
export default SalaryModel