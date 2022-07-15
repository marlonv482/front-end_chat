<template >
  <div v-if="!mostrarBarra" @click="mostrarBarra = true">
    <img
      src="https://cdn-icons.flaticon.com/png/512/1947/premium/1947247.png?token=exp=1657826423~hmac=6a988c72589454dbb480ac2438353379"
      alt="" style="width: 50px;
            flex-direction: row-reverse;
            position: fixed;
            right: 1rem;
            bottom: 1rem;
            background-color: #ff7200;
            border-radius: 50%;
            cursor: pointer;">
  </div>

  <div class="card-container container" v-if="mostrarBarra">
    <div class="card-ceader-container">
      <div class="settings-header">
        <img src="https://cdn-icons-png.flaticon.com/512/512/512142.png" class="settings-img" />
      </div>
      <div class="title-header">
        <div>
           <img src="../../assets/logo2.png" class="img-chat" alt="Minimizar Ventana" />
           </div>
        <span class="title-name">{{ title }}</span>
      </div>
      <div class="operation-header" @click="mostrarBarra = false">
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png" class="hide-img" alt="Minimizar Ventana" />
      </div>
    </div>
    <div class="card-body-container">
      <Users_Component />
    </div>
    <div>

    </div>
  </div>
</template>
<script>
//import Chat_Component from '../chat.component/Chat_Component.vue'
import Users_Component from '../usuarios.component/Users_Component.vue'

export default {
  name: 'BarraChat',
  components: {

    Users_Component
  },
  data() {
    return {
      mostrarBarra: false,
      title: 'GR Tecnologia'
    }
  }
}
</script>
<style >
@import url('./BarraChat.css');
</style>