const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {

  const sql = "SELECT * FROM data_pengendara"
  db.query(sql, (error, result) => {
    //hasil datan dari my sql 
    response(300, result, "get all data from data_pengendara", res)
  })
})

app.get('/find', (req, res) => {
  const sql = `SELECT nama FROM  data_pengendara WHERE no_kendaraan = ${req.query.no_kendaraan}`
  db.query(sql, (error, result) => {
    
    //hasil datan dari my sql 
    response(200, result, "get all data from data_pengendara", res)
  })
})

app.put('/username', (req, res) => {
  console.log({ updateData: (req.body)})
  res.end('merubah nama berhasil')
})

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
