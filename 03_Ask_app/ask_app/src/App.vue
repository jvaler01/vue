<template>
  <Ask />
</template>

<script>
import Ask from './components/Ask.vue';

export default {
  name: 'App',
  components: {
    Ask,
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
