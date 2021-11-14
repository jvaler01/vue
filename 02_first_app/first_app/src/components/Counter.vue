<template>
  <h2>{{ customTitle }}</h2>
  <hr>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
      <button v-on:click="increase">+</button>
      <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
    //props: ['title', 'start'],
    props: {
        title: String,
        start: {
            type: Number,
            // required: true,
            default: 30,
            validator (value){
                return value >= 0;
            }
        },
    },
    name: "Counter",
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        //Se ejecuta multiples veces
        getSquareValue() {
            return this.counter * this.counter;
        },
        increase() {
            this.counter = this.counter + 1;
        },
        decrease() {
            this.counter = this.counter - 1;
        }
    },
    computed: {
        //Se ejecuta una vez vez (cache), hasta que se cambie el counter
        squareCounter() {
            return this.counter * this.counter;
        },
        //Una forma de poner un default en una propiedad
        customTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style>
    button{
        -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.4); 
        background-color: aquamarine;
        border-color: rgba(255, 255, 255, 0);
        border-radius: 5px;
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.4);
        cursor: pointer;
        margin: 0 10px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
        width: 50px;
    }

    button:hover{
        background-color: rgb(66, 212, 163);
        transition: 0.3s ease-in-out;
    }
</style>