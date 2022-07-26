<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <div v-if="!user">
      <router-link to="/">Home</router-link>
    </div>

    <!-- for logged in users -->
    <div v-if="user">
      <span><strong>User:</strong> {{ user.email }}</span>
      <button @click="handleClick">Logout</button>
    </div>

    <!-- for logged out users -->
    <div v-if="!user">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logout");
    };

    return {
      user: computed(() => store.state.user),
      handleClick,
    };
  },
};
</script>

<style scoped>
</style>
