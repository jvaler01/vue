<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter title="Title 1" v-bind:start="15"/>
  <Counter />
</template>

<script>
//npm run serve
import Counter from "./components/Counter.vue";
export default {
  name: 'App',
  components: {
    Counter,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Scada&display=swap');
#app {
  font-family: 'Scada', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
