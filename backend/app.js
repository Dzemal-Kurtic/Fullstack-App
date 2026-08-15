import express from "express"
import cors from "cors"
import authorRouter from "./routes/authorRouter.js"
import bookRouter from "./routes/bookRouter.js"
import indexRouter from "./routes/indexRouter.js"


const app = express()
const corsPolicy = cors()

app.use(corsPolicy)

app.use("/authors", authorRouter)
app.use("/books", bookRouter)
app.use("/", indexRouter)

const PORT = 3000

app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`My first Express App - listening on port ${PORT}.`)
})