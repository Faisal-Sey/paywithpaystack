
import { register, login, changePassword, getUsers, getUser, deleteUser } from "../controllers/userController"
import { verifyPayment, getAllPayments } from "../controllers/paymentController"


const router = require("express").Router()

// user
router.post('/register', register)
router.post('/login', login)
router.post('/change_password', changePassword)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.delete('/user/:id', deleteUser)

// payments
router.post('/verify_payment', verifyPayment)
router.get('/payments', getAllPayments)



export default router