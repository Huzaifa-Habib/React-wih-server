import express from "express"
console.log("Yeah it is running")


const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("Request Ip", req.ip)
    res.send('Hello World! ' + new Date().toString());

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})