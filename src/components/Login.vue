<template>
  <form @submit.prevent="girisYap">
      <h4>Giriş Ekranı</h4>

        <input type="text" placeholder="Email Giriniz" v-model="email" />
        <input type="password" placeholder="Parola Giriniz" v-model="parola" />
        <button>Giriş</button>
  </form>
   <div class="error">
      {{hata}}
  </div>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin';

export default {

    setup(props,context){
        
        const email=ref('')
        const parola=ref('')

        const {hata,login} =useLogin()

        const girisYap=async ()=>{
            login(email.value,parola.value);
            if(!hata.value){
                context.emit('login')
            }
        }

        return {email,parola,girisYap,hata}
    }
}
</script>

<style scoped>
.container {

  width: 90%;
  max-width: 960px;
  margin: 50px auto;
  border-radius: 7px;
  box-shadow: 2px 4px 6px rgb(227, 208, 208);
  background: white;
  


  
}


.home {
  text-align: left;
  padding: 20px 50px;
  
   

}

button {
  text-decoration: none;
  background: #aa176f;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  padding: 10px 50px;
  margin-top: 40px;
  cursor: pointer;
}

h2 {
  color: black;
  border: 2px solid #444;
  display: inline;
  padding: 10px;
  border-radius: 10px;
  
}

h3 {
  color: black;
  
}

h4 {
  color: rgb(255, 255, 255);
  font-size: 25px;
  text-align: center;
  border-radius: 10px;
  padding: 5px 20px;
  font-family: 'Times New Roman', Times, serif;
  background: #aa176f;
  

}

form {
  width: 350px;
  margin: 2px auto;
  text-align: center;
  background:#9DAB86;
}

label {
  display: inline-block;
  margin: 20px 0 10px;
  

}

input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #aaa;
  margin: 10px auto;
  outline: none;
  
}

span {
  font-weight: bold;
  text-decoration: underline;
  color: #b33939;
  cursor: pointer;
  
}

.error {
  color: #ef5777;
  font-weight: bold;
}

nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #b33939;
  
}

nav p.email {
  font-size: 14px;
  color: #999;
}

.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
  

}

.created-at {
  display: block;
  color: rgb(0, 0, 0);
  font-size: 12px;
  margin-bottom: 4px;
    
}

.name {
  font-weight: bold;
  margin-right: 6px;
  color: black;
}

.messages {
  max-height: 300px;
  overflow: auto;
  float: auto;
  margin-left: 50px;
    
}
</style>