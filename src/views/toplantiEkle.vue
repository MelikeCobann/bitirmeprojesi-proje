<template>
 <div id="foto">
 <img src="../resim/yeni_logo.png" /></div>
<div id="formStyle">
<h3 id="tyazi">Toplantı Ekle</h3>
  <form @submit.prevent="toplantiEkle">
    <label id="baslik">Başlık : </label>
    <input v-model="baslik" type="text" required/>
    <label id="konu1">Konu : </label>
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
#foto{
     margin-left: 650px;
}
#baslik{
    color: black;
}
#tyazi{
     font-size:25px;
  text-align: center;
  text-transform: uppercase;
  
}
#konu1{
    color: black;
}
#formStyle{
    width:500px;
    height:100%;
    margin:auto;
}
form{
    background:#9DAB86;
    padding:20px;
    border-radius:10px;
    width:520px;
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
    background: #ca00a2;
    color:white;
    padding:10px;
    border:0;
    border-radius: 6px;
    font-size:16px;
}
</style>