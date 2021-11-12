const app = Vue.createApp({
    //template:``,
    data(){
        return {
            message: 'Hola mundo'
        }
    },
    methods: {
        changeMessage(){
            this.message = "change";

            this.capitalize();
        },
        capitalize(){
            this.message = this.message.toUpperCase();
        }
    }
})

app.mount('#myApp')