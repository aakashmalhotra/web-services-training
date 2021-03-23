const myExpress = require('express')
const app = myExpress()
const port = 7070

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/students', (req, res) => {
    const students = [
        {
            name: "superwoman",
            marks: 90
        },
        {
            name: "flash",
            marks: 70
        },
        {
            name: "batman",
            marks: 77
        },
        {
            name: "superman",
            marks: 60
        },
        {
            name: "arrow",
            marks: 94
        }
    ] 
    res.send(students);
})

app.listen(port, () => {
  console.log(`hoorayy!!! Who's the boss now! Example app listening at http://localhost:${port}`)
})

// Same as above
// app.listen(port, function() {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })