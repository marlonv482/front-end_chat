import Mensaje_Component from '../mensaje.component/Mensaje_Component.vue'
import { SiEmojiPopover } from "si-grenoble";
export default {
  name: 'Chat_Component',
  components: {
    Mensaje_Component
    , SiEmojiPopover

  }, data() {
    return {
      Usuario: "LEONARDO ERNESTO BARDALES MAIRENA",
      img: "https://cdn-icons.flaticon.com/png/512/2566/premium/2566158.png?token=exp=1657726501~hmac=72224606d5d156331310d252b6f9f699",
      mostrarChat: false,
      text: '',
      msjs: [{
        id: 1,
        name: 'Leonardo Bardales',
        text: 'Hola',
        date: this.formatDate(new Date()),
        position: 'left'
      },
      {
        id: 2,
        name: 'Marlon Ventura',
        text: 'Como estas?',
        date: this.formatDate(new Date()),
        position: 'right'
      },
      {
        id: 2,
        name: 'Marlon Ventura',
        text: 'Necesito un favor, que me vayas a comprar un litro de leche, una libra de azucar',
        date: this.formatDate(new Date()),
        position: 'right'
      },
      ],
    }
  },
  methods: {
    formatDate(date) {

      const d = date.getDate();
      const mo = date.getMonth() + 1;
      const y = date.getFullYear();
      const h = "0" + date.getHours();
      const m = "0" + date.getMinutes();

      return `${d}/${mo}/${y} ${h.slice(-2)}:${m.slice(-2)}`;

    },
    agregarMsj() {
      if (this.text === '') return;
      let msj = {
        id: 1,
        name: 'Leonardo Bardales',
        text: this.text,
        date: this.formatDate(new Date()),
        position: 'left'
      }
      this.msjs.push(msj);
      this.text = '';
    },
    getTime(date) {
      const h = "0" + date.getHours();
      const m = "0" + date.getMinutes();

      return `${h.slice(-2)}:${m.slice(-2)}`;
    }
  }
}