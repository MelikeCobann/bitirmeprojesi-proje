const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    parola: { type: String, require: true, unique: true },
    ad: { type: String, require: true, unique: true },
    soyad: { type: String, require: true, unique: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("login", loginSchema);