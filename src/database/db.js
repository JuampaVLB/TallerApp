const mongoose = require('mongoose');

const user = 'juanpablo_escuela';

const password = 'kHO8UFyKzm7LmDC5';

const dbname = 'escuela';

const uri = 'mongodb://localhost/escuela';

// `mongodb+srv://${user}:${password}@cluster0.ktoxf8e.mongodb.net/${dbname}`


mongoose.connect(uri)
    .then(() => console.log("BASE DE DATOS CONECTADA!"))
    .catch(e => console.log(e))