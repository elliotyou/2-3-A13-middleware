// app.js
const express = require('express')
const dateFormat = require('dateformat')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const timeStart = Date.now()
  const timeStampStart = dateFormat(timeStart, 'yyyy-mm-dd HH:MM:ss')
  const method = req.method
  const url = req.url

  res.on('finish', () => {
    const timeDiff = Date.now() - timeStart
    console.log(`${timeStampStart} | ${method} from ${url} | total time: ${timeDiff}ms`)
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})