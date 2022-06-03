<template>
  <div id="router">
    <router-view />
    
    <Meeting/>
  </div>



</template>

<script>

import Meeting from './components/meeting.vue'
export default {

  components: {
    Meeting
},

}
</script>
<style scoped>
router-link {
  text-decoration: none;
}
</style>
