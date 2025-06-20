import StudentModel from "../model/student.model.js"

export const admission = async(req, res)=> {
try{
  req.body.school = req.school._id
  const admission = await StudentModel.create(req.body);
  res.json(admission);

}catch(err) {
  res.status(500).json({message: err.message});
}
}


export const fetchStudents = async(req, res)=> {
try{
  let admission = []
  const session = req.query.session
  if(session) {
   admission =  await StudentModel.find({school: req.school._id}).sort({created_At: -1})
  }
  else{
 admission = await StudentModel.find({school: req.school._id}).sort({created_At: -1})
  }
 
  res.json(admission)

}catch(err) {
  res.status(500).json({message: err.message});
}
}

export const updateStudents = async(req, res) => {
   try{
        const admission = await StudentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!admission) {
          return res.status(404).json({message: 'Student not found with id value'})
          res.json(admission)
        }
   }catch(err) {
    res.status(500).json({meassage:err.message})
   }
}


export const deleteStudents = async(req, res) => {
   try{
        const admission = await StudentModel.findByIdAndDelete(req.params.id)
        if(!admission) {
          return res.status(404).json({message: 'Student not found with id value'})
          res.json(admission)
        }
   }catch(err) {
    res.status(500).json({meassage:err.message})
   }
}


