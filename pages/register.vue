<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 font-medium mb-2">Username</label>
                    <input id="username" v-model="form.username" type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter username" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
                    <input id="password" v-model="form.password" type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter password" required />
                </div>
                <div class="mb-6">
                    <label for="confirmPassword" class="block text-gray-700 font-medium mb-2">Confirm Password</label>
                    <input id="confirmPassword" v-model="form.confirmPassword" type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter password again" required />
                    <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
                </div>
                <button type="submit"
                    class="w-full text-white py-2 rounded-lg hover:bg-blue-700 transition btn-bg-primary">
                    Register
                </button>
            </form>
            <p class="mt-4 text-center text-gray-600">
                Already have an account? <NuxtLink to="/login" class="hover:underline color-primary ">Login now</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define form data type
interface RegisterForm {
    username: string;
    password: string;
    confirmPassword: string;
}

const form = ref<RegisterForm>({
    username: '',
    password: '',
    confirmPassword: '',
});

const errors = ref<{ confirmPassword?: string }>({});

const handleSubmit = () => {
    // Reset error messages
    errors.value = {};

    // Simple validation: Check if passwords match
    if (form.value.password !== form.value.confirmPassword) {
        errors.value.confirmPassword = 'Password and confirm password do not match';
        return;
    }

    // Simulate registration logic
    console.log('Registration form submitted:', form.value);
    // Future API call can be added here, e.g.:
    // await $fetch('/api/register', { method: 'POST', body: form.value });
    // Simulate redirect to login page after successful registration
    navigateTo('/login');
};
</script>