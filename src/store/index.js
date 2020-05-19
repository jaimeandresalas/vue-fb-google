import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:{}
  },
  mutations: {
    newUsuario(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    setUsuario({commit}, user){
      const usuario= {
        user: user.displayName,
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
      }
      commit('newUsuario', usuario)
    },
    cerrarSesion({commit}){
      auth.signOut()
      commit('newUsuario',null)
      router.push({name:'Ingreso'})
    }
  },
  modules: {
  }
})
