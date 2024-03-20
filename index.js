const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if (name == "dog") {
        res.json({ "sound": "멍멍" })
    }
    else if (name == "cat") {
        res.json({ "sound": "야옹" })
    }
    else if (name == "pig") {
        res.json({ "sound": "꿀꿀" })
    }
    else {
        res.json({ 'sound': '알수없음' })
    }
})

app.get('/mockData', function (req, res) {
    res.json([{
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    }])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})