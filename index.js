const express = require('express');
const database = require('./config/database');
const userModel = require('./models/userSchema');
const bodyParser = require('body-parser')

const port = 8808; 

const app = express();

app.set('view engine', 'ejs')

app.use(express.static ('node_modules'))
app.use(express.static ('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    userModel.find({}).then((data) => {
        console.log(data);
        return res.render('index', { data })
    }).catch((err) => {
        console.log(err);
        return false

    })
})

// Add Data

app.post('/insertData', (req, res) => {

    let editId = req.body.editId;

    if (editId) {
        userModel.findByIdAndUpdate(editId, {...req.body}).then((data)=>{
            console.log("Data Updated.")
            return res.redirect('/');
        }).catch((err)=>{
            console.log(err);
            return false; 
        })
    }
    else {    userModel.create({ ...req.body }).then((data) => {
        console.log(data);
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false

    })}

})

// delete Data

app.get('/deleteData/:id', (req, res) => {
    let { id } = req.params;

    userModel.findByIdAndDelete(id).then((data) => {
        console.log("Data Datated...");
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false
    })
})

// Edit Data

app.get('/editData/:id', (req, res) => {
    let { id } = req.params;

    userModel.findById(id).then((data) => {
        console.log(data);

        return res.render('edit', {
            data
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})


app.listen(port, (err) => {
    if (!err) {
        database
        console.log("Server is  Started on http://localhost:" + port)
    } else {
        console.log("Server Not Start");

    }
})