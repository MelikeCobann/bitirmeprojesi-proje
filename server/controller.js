const mongoose = require("mongoose");
const user = require("./models/loginSchema");

module.exports.findUser = (object) => {
    return new Promise((resolve, reject) => {
        user.userModel
            .find({ email: object.email, password: object.parola })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err + "Giriş Yapılamadı ");
            });
    });
};