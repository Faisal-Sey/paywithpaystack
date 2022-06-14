import express, { json, urlencoded } from 'express'
import cors from 'cors'


const app = express()

const corOptions = {
  origin: 'http://localhost:3000'
}


// middlewares
app.use(cors(corOptions))

app.use(json())

app.use(urlencoded({ extended: true }))


// routers

import router from './routes/userRouter'
app.use('/api', router)

// testing api

app.get("/", (req, res) => {
  res.json({ message: "hello world" })
})


// port

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
} )

export default app