// create webserver for comment service
// 1. create web server
// 2. create database connection
// 3. create table
// 4. create API for insert comment
// 5. create API for get comment

// 1. create web server
const express = require('express')
const app = express()
const port = 3000

// 2. create database connection
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comment'
})
db.connect()

// 3. create table
db.query('create table if not exists comment (id int auto_increment primary key, name varchar(255), comment text)', (err, result) => {
    if (err) {
        console.log('error: ', err)
    }
    console.log('result: ', result)
})

// 4. create API for insert comment
app.get('/comment', (req, res) => {
    const name = req.query.name
    const comment = req.query.comment
    db.query('insert into comment (name, comment) values (?, ?)', [name, comment], (err, result) => {
        if (err) {
            console.log('error: ', err)
            res.send('error')
        }
        console.log('result: ', result)
        res.send('ok')
    })
})

// 5. create API for get comment
app.get('/comments', (req, res) => {
    db.query('select * from comment', (err, result) => {
        if (err) {
            console.log('error: ', err)
            res.send('error')
        }
        console.log('result: ', result)
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('App listening at http://localhost:3000')
})