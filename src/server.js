const express = require('express');

//Locales
require('./database')
//const user = require('./routes/User.route')

//Initialize
const app = express();


//Settings
app.set('port', process.env.PORT || 5000)

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routers
app.use('/api', require('./routes/user.route'));

//Static File

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})
