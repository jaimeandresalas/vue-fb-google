<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span class="mr-2">Cerrar Sesion</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['cerrarSesion'])
  }
};
</script>
