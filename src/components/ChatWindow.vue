<template>

    <div class="chat-window">
        <div v-if="hata">{{hata}}</div>
        <div v-if="belgeler" class="messages" ref="mesajlar">
            <div v-for="belge in duzenlenmisBelgeler" :key="belge.id" class="single">
                <span class="created-at">{{belge.olusturulmaTarihi}}</span>
                <span class="name">{{belge.kullanici}}</span>
                <span style="text-decoration:none">{{belge.mesaj}}</span>
            </div>
        </div>
    </div>
</template>


<script>
import getCollection from '../composables/getCollection';
import {computed,ref,onUpdated} from 'vue'
import {formatDistanceToNow} from 'date-fns'
export default{

    setup(){

        const {hata,belgeler} =getCollection('mesajlar');

        const duzenlenmisBelgeler=computed(()=>{
            if(belgeler.value){
                return belgeler.value.map(doc=>{
                    let zaman=formatDistanceToNow(doc.olusturulmaTarihi.toDate())
                    return {...doc,olusturulmaTarihi:zaman}
                })
            }
        })


        const mesajlar=ref(null);

        onUpdated(() => {
            mesajlar.value.scrollTop=mesajlar.value.scrollHeight;
        })

        return {hata,belgeler,duzenlenmisBelgeler,mesajlar}
    }
}

</script>

<style scoped>
.container {
  width: 90%;
  max-width: 960px;
  margin: 150px auto;
  border-radius: 7px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  
}


.home {
  text-align: left;
  padding: 20px 50px;
  
}

button {
  text-decoration: none;
  background: #b33939;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  padding: 10px 20px;
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
  color: black;
}

form {
  width: 350px;
  margin: 2px auto;
  text-align: center;
  
  
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
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  font-family: 'Times New Roman', Times, serif;
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
  background:#9DAB86;
  padding: 30px 20px;
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0);
}

.single {
  margin: 18px 0;

  /*mesaj arka planı*/
}

.created-at {
  display: block;
  color: rgb(255, 255, 255);
  font-size: 14px;
  margin-bottom: 4px;
  


  
}

.name {
  font-weight: bold;
  margin-right: 6px;
  color:  #aa176f;
}

.messages {
  max-height: 300px;
  overflow: auto;
  float: auto;
  margin-left: 50px;
}
</style>