<template>
  <CardComponents />
</template>

<script>
import CardComponents from './components/CardComponents.vue'
export default {
    name: 'app',
    components: {
        CardComponents,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sCardComponentsans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
