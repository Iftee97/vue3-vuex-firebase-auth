<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../PiniaStores/authStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const authStore = useAuthStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await authStore.login({
          email: email.value,
          password: password.value,
        });
        router.push("/"); // redirects to the homepage
      } catch (err) {
        error.value = err.message;
      }
    };

    return {
      email,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>