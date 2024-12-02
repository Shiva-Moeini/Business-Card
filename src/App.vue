<template>
  <v-app>
    <v-main>
      <v-container>
        <CardComponents />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardComponents from './components/CardComponents.vue'
export default {
    name: 'App',
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
