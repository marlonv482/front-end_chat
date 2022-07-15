<script src="./users.js"></script>
<style >
@import url('./users.css');
</style>
<template >
   
    

  <div v-for="user in users" :key="user.id_user">
      <User_Component :user=user />
  </div>


</template>

