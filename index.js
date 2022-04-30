
require('dotenv').config()
const port = process.env.PORT

const express = require("express")
const cors = require("cors")
const app = express()

const wrapper = require("./bin/helpers/wrapper");


app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: "2mb" }))
app.use(cors())


const karyawan = require("./bin/app/karyawan.route")
const kemasan = require("./bin/app/kemasan.route")
const telur = require("./bin/app/telur.route")
const transaksi = require("./bin/app/transaksi.route")

karyawan.routes(app)
kemasan.routes(app)
telur.routes(app)
transaksi.routes(app)

app.get("/", (req, res) => {
  return wrapper.response(res, 'success', wrapper.data(null), 'This service is running properly');
});

app.listen(8000, () => {
  console.log(`App listening at http://localhost:${port}`)
})