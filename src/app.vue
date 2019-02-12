<template>
  <div id="app">
    <v-app class="primary lighten-1" dark>
      <v-content>
        <app-header></app-header>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  export default {
    components: {
      'app-header': Header
    }
 }
</script>