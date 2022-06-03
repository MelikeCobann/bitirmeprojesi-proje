<template>
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
      {{konu}}
    </v-card-text>
    
    <v-card-actions id="kart">
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header id="isim">
          <v-list-item-title>{{ ad }}</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      <v-btn variant="outlined" class="buton5">
        Katıl
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        ad:"Emre Karay",
        konu:'KONU'

    }),
}
</script>

<style scoped>
#isim{
    margin-left: 15px;
}

</style>