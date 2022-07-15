<template >
   
    

<div class="conten-user">
    <div >
        <img :src='user.photo' class="user-img"/>
    </div>
    <div class="user-info">
        <div class="user-name"
        >{{user.name}}</div>
        <div class="user-rol">{{user.rol}}</div>
    </div>
</div>

</template>

<script src="./user.js"></script>
<style >
@import url('./user.css');
</style>