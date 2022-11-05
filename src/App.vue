<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { useAuthStore } from "./PiniaStores/authStore";
import { useRouter } from "vue-router";

export default {
  components: {
    Navbar,
  },

  mounted() {
    const authStore = useAuthStore();
    authStore.handleAuthStateChanged();

    const router = useRouter();
    if (!authStore.user) {
      router.push("/login");
    }
  },
};
</script>