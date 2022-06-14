import { user as _user } from "../models"
import { hashPassword, comparePass } from "../utils/passConfig"


// create main Model
const User = _user


// create user
export const register = async (req, res) => {


  let info = {
    username: req.body.username,
    password: hashPassword(req.body.password),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }

  const user = await User.create(info)
  res.status(200).send(user)
}


export const login = async (req, res) => {
  

  let info = {
    username: req.body.username,
    password: req.body.password,
  }

  const user = await User.findOne({ where: { username: info.username }})
  if (comparePass(info.password, user.password)) {res.status(200).send(user)}
}


// All Users
export const getUsers = async(req, res) => {

  let users = await User.findAll({
    attributes: [
      'id',
      'username',
      'first_name',
      'last_name'
    ]
  })
  res.status(200).send(users)

}

// One User
export const getUser = async(req, res) => {

  let id = req.params.id
  let user = await User.findOne({ where: {id: id} })
  res.status(200).send(user)

}

// Delete User
export const deleteUser = async(req, res) => {

  let id = req.params.id
  await User.destroy({ where: {id: id} })
  res.status(200).send("Deleted!")

}


// Change User
export const changePassword = async(req, res) => {

  let info = {
    username: req.body.username,
    password: req.body.password,
  } 
  let user = await User.update(
    { password: hashPassword(info.password) }, 
    { where: { username: info.username } }
  )

  res.status(200).send("Password Changed Successfully")

}




