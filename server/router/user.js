const User = require("../models/User");

exports.girisyap = (req, res, next) => {
    /**Giriş Ekranı gösteriliyor */
    res.render("views/loginpage");
};

exports.kayitol = (req, res, next) => {
    /**kayıt Ekranı gösteriliyor */
    res.render("views/registerpage");
};

exports.kayitPostSayfasi = (req, res, next) => {
    /**kayıt ol butonuna basıldığınnda veriler bu kısıma gelip burada çalışacak */
    const { ad, soyad, email, parola, parolaTekrar } = req.body;

    if (parola == parolaTekrar) {
        yeniKullanici = new User();
        yeniKullanici.ad = ad;
        yeniKullanici.soyad = soyad;
        yeniKullanici.email = email;
        yeniKullanici.parola = parola;

        yeniKullanici.save(function(err, result) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(result);
                res.send("Kayıt Başarılı => Kulllanıcı ad soyad: ${ad} ${soyad}");
            }
        });
    } else {
        res.send("Parolalar eşleşmiyor");
    }
};