<template>
  <nav>
    <h1>Pinia Auth</h1>
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const showNavbar = computed(() => authStore.showNavbar);
    const user = computed(() => authStore.user);
    const authIsReady = computed(() => authStore.authIsReady);
    const router = useRouter();

    const handleClick = () => {
      authStore.logout();
      router.push("/login");
    };

    const handleToggleNavbar = () => {
      authStore.toggleNavbar();
    };

    return {
      handleClick,
      handleToggleNavbar,
      showNavbar,
      user,
      authIsReady,
    };
  },
};
</script>