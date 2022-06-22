<template>
 <div class="container">
     <Navbar />
     <ChatWindow />
     <ChatForm />
 </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ChatForm from '../components/ChatForm'
import ChatWindow from '../components/ChatWindow'

export default {
    components:{Navbar,ChatForm,ChatWindow}
}
</script>

<style>
.container {
  width: 90%;
  max-width: 960px;
 margin: auto;
  border-radius: 7px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
}
</style>