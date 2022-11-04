import { createStore } from 'vuex'

// firebase auth imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    },

    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },

  actions: {
    async signup(context, { email, password }) {
      console.log('signup action')
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('could not sign up')
      }
    },

    async login(context, { email, password }) {
      console.log('login action')
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('could not login')
      }
    },

    async logout(context) {
      console.log('logout action')
      await signOut(auth)
      context.commit('setUser', null)
    }
  }
})

const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsubscribe()
})

export default store

// NOTE:
// 'dispatch' -> actions || 'dispatch' for actions
// 'commit' -> mutations || 'commit' for mutations