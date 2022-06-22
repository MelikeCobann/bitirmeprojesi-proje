<template>
<div id="formStyle">
<h3>Toplantı Ekle</h3>
  <form @submit.prevent="toplantiEkle">
    <label>Başlık : </label>
    <input v-model="baslik" type="text" required/>
    <label>Konu : </label>
    <input v-model="konu" type="text" required/>
    <button>Toplantı Ekle</button>


  </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            baslik:'',
            konu:'',
        }
    },
    methods:{
        toplantiEkle(){
            let toplanti={
                baslik:this.baslik,
                konu:this.konu,
                yapildi:false,
                id:Math.floor(Math.random()*100000000),
                
            }
            fetch('http://localhost:3000/toplantilar',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(toplanti)
            }).then(()=>{
                this.$router.push('/main')
            })
            alert('Toplantı Eklendi.')
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
form{
    background: white;
    padding:20px;
    border-radius:10px;
}
label{
    display:block;
    color:#bbb;
    text-transform: uppercase;
    font-size:14px;
    font-weight:bold;
    letter-spacing:1px;
    margin:20px 0 10px 0;

}
input{
    padding: 10px;
    border: 0;
    border-bottom:1px solid #ddd;
    width:100%;
    box-sizing: border-box;
}
textarea{
    border:1px solid #ddd;
    padding:10px;
    width:100%;
    box-sizing: border-box;
    height:100px;
}
form button{
    display:block;
    margin: 20px auto 0;
    background: #00ce89;
    color:white;
    padding:10px;
    border:0;
    border-radius: 6px;
    font-size:16px;
}
</style>