<template >
    <div class="msg right-msg">
    
        <div class="msg-bubble">
            

            <div class="msg-text">{{ text }}</div>
            <div class="msg-info">
                <div class="msg-info-time">{{ date.slice(-5) }}</div>
            </div>
        </div>
    </div>

</template>
<script src="./mensaje.js"></script>
<style >
@import url('./mensaje.css');
</style>