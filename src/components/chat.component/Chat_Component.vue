<script src="./Chat.js"></script>
<style >
@import url('./Chat.css');
</style>
<template >
<div v-if="!mostrarChat" @click="mostrarChat=true">
    <img src="https://cdn-icons.flaticon.com/png/512/1947/premium/1947247.png?token=exp=1657826423~hmac=6a988c72589454dbb480ac2438353379" alt=""
    style="width: 50px;
    flex-direction: row-reverse;
     position: fixed;
    right: 1rem;
    bottom: 1rem;
    background-color: #ff7200;
    border-radius: 50%;
    cursor: pointer;">
</div>
    <div class="cardContainerChat " v-if="mostrarChat">
        <div class="CardHeaderChat ">
            <div class="settings">
                <img src="https://cdn-icons-png.flaticon.com/512/512/512142.png" alt="">
            </div>
            
            
            <div class="UserNameChat">
                <div class="msg-imgChat"
                style="background-image: url('https://cdn-icons.flaticon.com/png/512/2566/premium/2566158.png?token=exp=1657726501~hmac=72224606d5d156331310d252b6f9f699')
                display:inline;">
                <span class="chatStatus offline">
						<i class="fas fa-globe"></i>
					</span>
                </div>
                
                    <div style="margin: 0.5REM;">
                        {{Usuario}}
                    </div>
                
            </div>
            <div style="
            width: 20px; 
            padding-top: 15px;
            
            right:10px;
            cursor: pointer;" @click="mostrarChat=flase">
                
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png"
                        style=/>
                
            </div>
        </div>

        <div class="CardBodyChat ">
             <div v-for="msj in msjs" :key="msj.id" >
                 <Mensaje_Component :text=msj.text :date=msj.date :position=msj.position></Mensaje_Component>
            </div>
           
        </div>

        <div class="CardFooterChat ">

            <!--<div class="w-full h-full flex flex-row justify-center items-center">
                <SiEmojiPopover />
            </div>
            -->
            <input type="text" class="InputSearchChat" placeholder="Escribir Mensaje" v-model="text"/>
            <span class="SentIcon" @click="agregarMsj()">
                <img 
                    src='https://cdn-icons.flaticon.com/png/512/3682/premium/3682321.png?token=exp=1657668516~hmac=8a32c30bb485c658ceb8236333fe4263' />
            </span>
        </div>
    </div>
</template>


