<template>
  <nav>
    <h1>Vuex Auth</h1>
    <div v-if="authIsReady">
      <!-- for logged in users -->
      <div v-if="user">
        <span><strong>User:</strong> {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
        <button @click="handleToggleNavbar">toggle -- {{ showNavbar }}</button>
      </div>

      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "../PiniaStores/authStore";

export default {
  setup() {
    const authStore = useAuthStore();
    const showNavbar = computed(() => authStore.showNavbar);

    const handleClick = () => {
      authStore.logout();
    };

    const handleToggleNavbar = () => {
      authStore.toggleNavbar();
    };

    return {
      handleClick,
      handleToggleNavbar,
      showNavbar,
      user: computed(() => authStore.user),
      authIsReady: computed(() => authStore.authIsReady),
    };
  },
};
</script>