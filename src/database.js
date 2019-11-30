const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/login-jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Base de Datos Conectado'))