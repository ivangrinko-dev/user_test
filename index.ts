import app from "./src/app"

const port = process.env.PORT
app.listen(8000, () => console.log("server is running"))