import SaleryModel from "../model/salery.model.js"

export const createSalery = async(req,res) => {
    try{
      req.body.school = req.school._id
      const salery = await SaleryModel.create(req.body)
        res.json(salery)
      }
    
    catch(err){
        res.status(500).json({message:err.message})
    }

}

export const fecthSalery = async(req,res) => {
 try{
  const schoolId = req.school._id
   const salery = await SaleryModel.find({school:schoolId}).sort({createdAt:-1})
   res.json(salery)
 }
 catch(err) {
   res.status(500).json({message:err.message})
 }
}

  export const updateSalery = async(req,res) => {
    try{
      const salery = await SaleryModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

      if(!salery) 
        return res.status(404).json({message: "Salery not found by id"})

       res.json(salery)
    }

    catch(err) {
        res.status(500).json({message:err.message})
    }
       
}

export const deleteSalery = async(req,res) => {
    try{
       const salery = await SaleryModel.findByIdAndDelete(req.params.id)
       
       if(!salery)
        return res.status(404).json({message: "Salery not found by id"})
      res.json(salery)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
}