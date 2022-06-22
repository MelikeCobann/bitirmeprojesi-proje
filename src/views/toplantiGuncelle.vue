<template>

  <h1>Not Güncelleme</h1>
  
<div id="formStyle">
  <form @submit.prevent="handleSubmit">
    <label>Başlık : </label>
    <input v-model="baslik" type="text" required/>
    <label>Konu : </label>
    <input v-model="konu" type="text" required/>
    <label>Tarih : </label>
    <input v-model="tarih" type="date" required/>
    <label>Toplantı Saati: </label>
    <input v-model="saat" type="time" required/>
    <button>Toplantı Güncelle</button>
  </form>
</div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            baslik:'',
            konu:'',
            tarih:'',
            saat:'',
            uri:'http://localhost:3000/toplantilar/'+this.id
        }
    },
   mounted(){
    fetch('http://localhost:3000/toplantilar/'+this.id)
      .then((res)=>res.json())
      .then(data=>{
                this.baslik=data.baslik;
                this.konu=data.konu;
                this.tarih=data.tarih;
                this.saat=data.saat;
              
      })
   },
   methods:{
    handleSubmit(){
      fetch('http://localhost:3000/toplantilar/'+this.id,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({baslik:this.baslik,konu:this.konu,})

      }).then(()=>{
        this.$router.push('/main')
        alert('Notunuz Güncellendi.')
      }).catch((err)=>console.log(err))
    }
   }

}
</script>

<style>
#formStyle{
    width:500px;
    height:100%;
    margin:auto;
}
h1{
    text-align: center;
}

</style>