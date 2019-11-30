
const express = require('express');
const jwt = require('jsonwebtoken')
//Locales
const User = require('../models/user.model')
const config = require('../config')
//Initializer
const router = express.Router(); //const { Router } = require('express'); const router = Router();

router.post('/signup', async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = new User({
        username,
        email,
        password
    })
    user.password = await user.encryptPassword(user.password); //la funcion esta hecho con async awaite por eso tbn usamos aqui
    await user.save();
    //generacion del token
    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60*60*24
    })
    //se manda la autorizacion y el token por http
    res.json({auth: true, token})
});
 
router.get('/signin',(req, res, next) => {
    res.json('Logueate');
});

router.get('/me',(req, res, next) => {
    res.json('Mi Perfil');
});

module.exports = router;