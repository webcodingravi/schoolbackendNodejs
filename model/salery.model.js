import mongoose, {Schema,model} from "mongoose"

const salerySchema = new Schema({
    school :{
      type: mongoose.Types.ObjectId,
      required:true,
      ref:"school"
    },
    employee: {
        type:String,
        required:true
    },
    salery: {
        type:Number,
        required:true
    },
    description: {
        type:String
    },
    saleryDate: {
        type:Date,
        required:true,
    }
},{timestamps: true})

const SaleryModel = model("Salery",salerySchema)
export default SaleryModel