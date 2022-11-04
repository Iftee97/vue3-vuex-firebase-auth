<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { useAuthStore } from "./PiniaStores/authStore";

export default {
  components: {
    Navbar,
  },

  mounted() {
    const authStore = useAuthStore();
    authStore.handleAuthStateChanged();
  },
};
</script>