import PaymentModel from "../model/payment.model.js"

export const createPayment = async(req,res) => {
    try{
        req.body.school = req.school._id
        const payment = await PaymentModel.create(req.body)
        res.json(payment)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
}


export const fecthPayment = async(req,res) => {
    try{
        const schoolId = req.school._id
       const payment = await PaymentModel.find({school: schoolId}).sort({createdAt:-1})
       res.json(payment)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
}

export const updatePayment = async(req,res) => {
    try{
        const payment = PaymentModel.findByIdAndUpdate(req.parms._id,req.body, {new:true})
        if(!payment)
        return res.status(404).json({message:"payment not found"})
        res.json(payment)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
}

export const deletePayment = async(req,res) => {
    try{
        const payment = PaymentModel.findByIdAndDelete(req.parms._id)
        res.json(payment)

    }

    catch(err) {
        res.status(500).json({message:err.message})
    }
}
