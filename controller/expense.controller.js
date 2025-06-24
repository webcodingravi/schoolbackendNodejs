import ExpenseModel from"../model/expense.model.js"

export const createExpense = async(req,res) => {
    try{
        req.body.school = req.school._id
       const expense = await ExpenseModel.create(req.body)
       res.json(expense)  
    }

    catch(err) {
        res.status(500).json({message:err.message})
    }
}

export const fetchExpense = async(req,res) => {
    try{
        const schoolId = req.school._id
       const expenses = await ExpenseModel.find({school:schoolId}).sort({createdAt:-1})
       res.json(expenses)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

export const updateExpense = (req,res) => {
       try{

        const expense = ExpenseModel.findByIdAndUpdate(req.parms.id, req.body, {new:true})
        res.json(expense)
       }
       catch(err) {
            res.status(500).json({message:err.message})
       }
}


export const deleteExpense = (req,res) => {
       try{

        const expense = ExpenseModel.findByIdAndDelete(req.parms.id, req.body, {new:true})
        res.json(expense)
       }
       catch(err) {
            res.status(500).json({message:err.message})
       }
}

