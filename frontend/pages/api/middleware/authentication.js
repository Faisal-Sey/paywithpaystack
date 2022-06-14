import jwt from "jsonwebtoken"


const checkToken = (req, res, next) => {
  let token = req.get("authorization")

  if (token){
    
  }
}