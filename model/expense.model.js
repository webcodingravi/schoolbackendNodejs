import mongoose, {Schema,model} from 'mongoose'

const expenseShema = new Schema({
    school: {
        type:mongoose.Types.ObjectId,
         ref: 'School',
        required:true
    },
    title: {
        type: String,
        required:true
    },
    amount: {
        type:Number,
        required:true
    },
    description: {
        type:String
    },
    expenseAt: {
        type:Date,
        required:true
    }
},{timestamps:true})

const ExpenseModel = model("Expense", expenseShema)
export default ExpenseModel

