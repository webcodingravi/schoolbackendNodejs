import SalaryModel from "../model/salary.model.js"

export const createSalary = async(req,res) => {
    try{
      req.body.school = req.school._id
      const salery = await SalaryModel.create(req.body)
        res.json(salery)
      }
    
    catch(err){
        res.status(500).json({message:err.message})
    }

}

export const fecthSalary = async(req,res) => {
 try{
  const schoolId = req.school._id
   const salery = await SalaryModel.find({school:schoolId}).sort({createdAt:-1})
   res.json(salery)
 }
 catch(err) {
   res.status(500).json({message:err.message})
 }
}

  export const updateSalary = async(req,res) => {
    try{
      const salery = await SalaryModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

      if(!salery) 
        return res.status(404).json({message: "Salary not found by id"})

       res.json(salery)
    }

    catch(err) {
        res.status(500).json({message:err.message})
    }
       
}

export const deleteSalary = async(req,res) => {
    try{
       const salery = await SalaryModel.findByIdAndDelete(req.params.id)
       
       if(!salery)
        return res.status(404).json({message: "Salary not found by id"})
      res.json(salery)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
}