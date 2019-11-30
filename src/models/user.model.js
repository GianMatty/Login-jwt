const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

//Encriptar password
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //proceso de encriptado por 10 veces
    return bcrypt.hash(password, salt); //retorna el password encriptado
};
//Comparar password encriptado
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema)