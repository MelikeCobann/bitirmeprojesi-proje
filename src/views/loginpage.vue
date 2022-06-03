<template>
  <br>
  <br>
  <h2> MALTEPE ÜNİVERSİTESİ TOPLANTI TAKİP SİSTEMİ</h2>
  <br>
  
  <div id="kapsayici">
    <div id="girisyap">
<br>
      <h3> Giriş Yap</h3>
      <br>
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :rules="passwordRules" label="Şifre" required type="password"></v-text-field>
       <div class="button"> <v-btn>Giriş Yap</v-btn> </div>
      </v-form>
      <br>
      <br>
      <h3>Üye Değil Misin? <router-link to="/register">Kayıt Ol!</router-link></h3>
    </div>
  </div>
  <div id="logo">
   <div class=""></div>
  </div>
</template>


<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: undefined,
    password: undefined,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => !!(v || '').match(/@/) || 'Please enter a valid email',

    ],

    password: '',
    passwordRules: [v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Password must contain an upper case letter, a numeric character, and a special character',],

    checkbox: false

  })
}


</script>

<style scoped>

#logo {
  width: 591px;
  height: 128px;
  margin: auto;
  background-image: url(../../images/yeni_logo.png);

}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}
h3 {
  text-align: center;
}

#kapsayici {
  width: 591px;
  height: 500px;
  margin: auto;
  background-color:white;
  border-radius: 10px;
}

#kayitol {
  width: 400px;
  margin-left:95px;
  float: left;
}

#girisyap {
  width: 400px;
  margin:auto;
}
</style>
