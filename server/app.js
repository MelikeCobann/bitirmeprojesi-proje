const path = require("path");
const express = require("express");

const app = express();
const crud = require("./");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const user = require("./models/User");
const { Router, response } = require("express");
const { default: mongoose } = require("mongoose");
const { mainModule } = require("process");

mongoose
    .connect("mongodb://27017/bitirmep", {
        userNewUrlParser: true,
        useUnitfiedTopology: true,
    })
    .then(() => console.log("mongo bağlandı"));

app.engine(
    "vue",
    engine({ extname: vue, views: "loginpage.vue" })

);

app.set("view engine", "vue");

app.get("/index", (req, res) => {
    res.render("router/index");
});
app.get("/register", (req, res) => {
    res.render("views/register");
});
app.get("/login", user.girisyap);
app.get("/register", user.kayitol);

app.post("/login", (req, res) => {
    console.log(req.body);
    crud.findUser(req.body)
        .then((response) => {
            if (response.length == 0) {
                res.send({ message: "kullanıcı bulunamadı" });
            } else {
                response[0].soyad = "Giriş Yapıldı"
                res.send(response);
            }
        })
        .catch((err) => res.send("Giriş Yapılamadı"));
})