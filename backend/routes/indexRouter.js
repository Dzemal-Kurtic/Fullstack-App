import express from "express"

const indexRouter = express.Router()

indexRouter.get("/", (req, res) => {
    res.send("Home page")
})

/*indexRouter.get("/:indexId", (req, res) => {
    const { indexId } = req.params
    res.send(`Index Id: ${indexId}`)
})*/

export default indexRouter