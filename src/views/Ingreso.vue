<template>
  <div>
    <v-container justify-center mt-5> 
      <h1>Ingreso</h1>
      <v-row xs12 sm8 md6 xl4 no-gutters>
        <v-card class="mx-auto">
          <v-card-text class="display-1 text-uppercase white--text text-center" :class="registro ? 'success' : 'accent'">  
            <span v-if="!registro">Ingreso</span>
            <span v-if="registro">Registro</span>
          </v-card-text>
          <v-card-text class="mx-auto">
            <v-btn block color="error" @click="google" dark rounded>
              <v-icon left dark >mdi-thumb-up</v-icon>
              Google
            </v-btn>
            <v-btn block color="blue" dark rounded @click="facebook">
              <v-icon left dark >mdi-star</v-icon>
              Facebook
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn block @click="registro = !registro" v-if="!registro"
            >¿No tienes Cuenta? Registrate aqui</v-btn>
            <v-btn block @click="registro = !registro" v-if="registro"
            >¿Ya tienes Cuenta? Ingresa aqui</v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">

  import {firebase, auth, db} from "../firebase"
  import {mapMutations} from "vuex"
  import Vue from 'vue'

  export default Vue.extend({
    data(){
      return{
        registro:false
      }
    },
    methods:{
      ...mapMutations(['newUsuario']),
      google(){
        console.log('Google')
        const provider = new firebase.auth.GoogleAuthProvider();
        this.ingresar(provider);
        
      },
      facebook(){
        const provider = new firebase.auth.FacebookAuthProvider();
        this.ingresar(provider);
        
    },
    async ingresar(provider){
      firebase.auth().languageCode = 'es';
      try {
          const result = await firebase.auth().signInWithPopup(provider);
          const user= result.user;
          //Guardar en base de datos
          const usuario= {
            user: user.displayName,
            email: user.email,
            uid: user.uid,
            foto: user.photoURL
          }

          this.newUsuario(usuario)
          //Guardar en firebase
          await db.collection('usuarios').doc(usuario.uid).set(usuario)
          console.log('Usuario guardado desde fb')
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
</script>

<style scoped>

</style>