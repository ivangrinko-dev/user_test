import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import user from "./controller/user.controller"
import filiUpload from "express-fileupload"

const app = express()

app.use(bodyParser.json())

app.use(cors())
app.use(filiUpload({}))

app.use(`/user`, user)


app.use((error, req, res, _next) => res.send(error.message))

export default app