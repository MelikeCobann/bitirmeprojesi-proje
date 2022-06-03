<template>
  <v-app>
   
    <v-navigation-drawer app v-model="drawer" clipper> 
    <br>
    <div class="avatar1">
       <v-avatar
     color="grey"
     size="100"
    ></v-avatar>
      </div>
      <br>
      
      <div class="T">
        <v-toolbar-title class="align-center">
      <span class="title"><h3>{{title}}</h3></span> <br>
      <span class="title"><h5>{{email}}</h5></span>
     </v-toolbar-title> 
                </div>
                <br>
                
        <div id="button"> <v-btn color="red">Çıkış Yap</v-btn> </div>      
    </v-navigation-drawer>
    <v-app-bar app >
        <v-app-bar-nav-icon @click="drawer=!drawer"/>
      <div class="üst">
      <v-spacer/>
      
  <v-dialog 

      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn class=""
          color="primary"
          v-bind="props"
        >
          Toplantı Oluştur
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="Atext ">Toplantı Oluştur</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col
                cols="12" 
                >
                <v-text-field class="Ad"
                label="Toplantı Konusu"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                
              >
                
              </v-col>
              <v-col cols="12">
                <v-text-field class="icerik"
                 label="Toplantı İçeriği"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="Tarih"
                  label="Toplantı Tarihi"
                  
                ></v-text-field>

              </v-col>
              
              <v-col
               
              ><v-autocomplete
                  :items="kisiler"
                  multiple
                ></v-autocomplete>
               
              </v-col>
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            İptal et
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Gönder
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </div>
     </v-app-bar>
     <v-contend>
       <v-conteiner>
         <br>
         <br>
         <br>
         <div id="aktifToplanti">
         <h2>Aktif Toplantılar</h2>
        <hr>
<br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#7FBB9D"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu1}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{title}}</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      <v-btn variant="outlined" class="buton5">
        Katıl
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</div>
<div id="yaklasanToplanti">
  <h2>Yaklaşan Toplantılar</h2>
  <hr>
  <br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#7FB6BB"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu2}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{title}}</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
  <br>
  <v-card
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu3}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{title}}</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
  <br>
  <v-card
    class="mx-auto"
    color="#BB7FAE"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu4}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{title}}</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
  </div>
</div>
<div id="gecmisToplanti">
<h2>Geçmiş Toplantılar</h2>
<hr>
<br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#7FA0BB"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu5}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title> {{title}} </v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
  <br>
   <v-card
    class="mx-auto"
    color="#887FBB"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu6}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title> {{title}} </v-list-item-title>
        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
  <br>
   <v-card
    class="mx-auto"
    color="#A87FBB"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      {{konu7}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title> {{title}} </v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      
    </v-card-actions>
  </v-card>
   

    </div>
  </div>
       </v-conteiner>
     </v-contend>
  </v-app>
 
</template>

<script>
  export default {
    data: () => ({
      drawer:false,
      email: 'emrekaray666@gmail.com',
      title:"Emre Karay",
      konu1:"Konu",
      konu2:"Konu",
      konu3:"konu",
      konu4:"konu",
      konu5:"konu",
      konu6:"konu",
      konu7:"konu",
     
      items: [
        {
          text: 'Aktif Toplantılar',
          disabled: false,
          href: '#',
        },
        {
          text: 'Yaklaşan Toplantılar',
          disabled: false,
          href: '#',
        },
        {
          text: 'Geçmiş Toplantılar',
          disabled: false,
          href: '#',
        },
        
        
      ],
      
      dialog: false,
      kisiler:['Batuhan', 'Emre', 'Emirhan', 'sıla', 'melike', ],
      
    }),
   
  }
</script>


<style scoped>
.T{
  text-align: center;
}
.avatar1{ 
  margin-left: 30%;
}
#aktifToplanti{
  width:33%;
  float:left;
  height:20cm;
  margin-left:5px;
  margin-top:3px;

}
#yaklasanToplanti{
  width:33%;
  float:left;
  height:100%;
  margin-left:5px;
  margin-top:3px;

}
#gecmisToplanti{
  width:33%;
  float:left;
  height:100%;
  margin-top:3px;
  margin-left:5px;
}

.buton5{
  float:right;
}
#mailb{ 
  margin-left: 7px;
}
h2{
  text-align: center;
}
#button{
  margin-left:75px;
}

</style>
