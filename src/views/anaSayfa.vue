<template>
<div class="kapsayici"><main class="home">
    <div id="navbar">
     
      <router-link :to="{name: 'Home'}"><button id="btn1"><span class="material-icons">logout</span></button></router-link>
      <router-link :to="{name: 'ToplantiEkle'}"><button id="btn1"><span class="material-icons">note_add</span></button></router-link>
      <router-link :to="{name: 'ChatOda'}"><button id="btn1"><span class="material-icons">chat</span></button></router-link>
    </div>
    <div id="baslik">
          <h3>Notlar</h3>
        </div>
        <hr>
    <div id="toplantilar">
      <div id="gelecekToplanti">
        <div v-if="toplantilar.length">

          <div v-for="top in toplantilar" :key="top.id">
            <toplanti1 :toplanti1="top" @sil="silHandle" @yapildi="yapildiHandle" />
          </div>
        </div>
        <div v-else>
          <h2>Not Bulunamadı.</h2>
        </div>
      </div>
    
         
      </div>
  </main></div>
  
</template>

<script>
import toplanti1 from '../components/toplanti.vue'
export default {
  components: {
    toplanti1,
    
  },
  data() {
    return {
      toplantilar: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/toplantilar')
      .then((res) => res.json())
      .then((data) => this.toplantilar = data)
      .catch((err) => console.log(err))
  },
  methods: {
     currentDateTime() {
      const current = new Date();
      const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date +' '+ time;
     },
    silHandle(id) {
      this.toplantilar = this.toplantilar.filter(top => {
        return top.id !== id
      })
    },
    yapildiHandle(id) {

      let top = this.toplantilar.find(toplanti1 => {
        return toplanti1.id == id
      });
      top.yapildi = !top.yapildi;
    },
  }

}
</script>

<style scoped>

#btn1{
  background:#E4E9BE;
  margin: 5px;
  
}
.kapsayici{
  background:#9DAB86;
 border-radius: 30px;
}

h2{
  text-align: center;
  
  
}

button{
  width: 100px;
  height:50px;
  float:right;
  margin-left:20px;
  border-radius: 15px;
}
#navbar{
  width:100%;
  height:50px;
}
#baslik {
  width: 100%;
  height: 20px;
  margin: auto;
  text-align:center;
  font-size: 20px;
   text-transform:uppercase;
   margin-bottom: 40px;


}

#toplantilar {
  width: 52%;
  margin:auto;
  border-radius:10px;
}

#gelecekToplanti {
  width:95%;
  height: 50%;
  float: left;
  margin-left: 25px;
  background-color: #E4E9BE;
  border-radius: 25px;
}


</style>