<template>
  <div class="home1 container">
    <h2>Not Gönderme Platformu</h2>
    <div v-if="uyeMi">
      <Login @login="chatBasla" />
      <p>Üye olmak için <span @click="uyeMi=false">Üye Ol</span> sayfasına gidiniz</p>
    </div>
    <div v-else>
      <Register @register="chatBasla" />
      <p>Giriş yapmak için <span @click="uyeMi=true">Giriş</span> sayfasına gidiniz</p>
    </div>
  </div>
  <div id="resim">
 <img src="../resim/yeni_logo.png" />
  </div>
</template>

<script>
import Register from '../components/Register';
import Login from '../components/Login';
import {ref} from 'vue'
import {useRouter} from 'vue-router';

export default {
  name: 'Home',
  components:{
    Login,
    Register
  },
  setup(){
    const uyeMi=ref(true)
    const router=useRouter();

    const chatBasla=()=>{
      router.push({name:'anaSayfa'})
    }

    return {uyeMi,chatBasla}
  }
}
</script>

<style scoped>
body{
  background-color: cadetblue;
}
#resim{
 margin-left: 650px;
}
.home1{
  text-align: left;

}
span {
  font-weight: bold;
  text-decoration: underline;
  color: #b33939;
  cursor: pointer;
}

</style>
