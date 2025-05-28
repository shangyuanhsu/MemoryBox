<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 font-medium mb-2">Username</label>
                    <input id="username" v-model="form.username" type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter username" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
                    <input id="password" v-model="form.password" type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter password" required />
                </div>
                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition btn-bg-primary">
                    Login
                </button>
            </form>
            <p class="mt-4 text-center text-gray-600">
                Don't have an account? <NuxtLink to="/register" class="text-blue-600 hover:underline color-primary">Register now</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define form data type
interface LoginForm {
    username: string;
    password: string;
}

const form = ref<LoginForm>({
    username: '',
    password: '',
});

const handleSubmit = () => {
    // Simulate login logic
    console.log('Login form submitted:', form.value);
    // Future API call can be added here, e.g.:
    // await $fetch('/api/login', { method: 'POST', body: form.value });
    // Simulate redirect to dashboard after successful login
    navigateTo('/dashboard');
};
</script>