import mongoose, {Schema,model} from 'mongoose'
const classSchema = new Schema({
      school: {
        type:mongoose.Types.ObjectId,
        ref: 'School',
        required: true
      },
      class: {
        type:String,
        required:true
      },
      fee: {
        type: Number,
        required:true
      },
      classTeacher: {
        type: mongoose.Types.ObjectId,
        ref: "Teacher",
        required:true
      },
      sections: [{
         type:String,
         required:true
      }]

},{timestamps:true})

const ClassModel = model("Class",classSchema)
export default ClassModel;