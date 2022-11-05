import { defineStore } from 'pinia'

// firebase auth imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    authIsReady: false,
    showNavbar: false, // might need for responsive view
    loading: false
  }),

  getters: {},

  actions: {
    async signup({ email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        this.user = response.user
      } else {
        throw new Error('could not sign up')
      }
    },

    async login({ email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        this.user = response.user
      } else {
        throw new Error('could not login')
      }
    },

    async logout() {
      await signOut(auth)
      this.user = null
    },

    handleAuthStateChanged() {
      this.loading = true
      this.authIsReady = true
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          this.loading = false
        } else {
          this.user = null
          this.loading = false
        }
        console.log('user:', this.user)
      })
    },

    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    }
  },
})