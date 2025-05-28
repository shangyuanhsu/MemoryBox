<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to MemoryBox!</h1>
        <p class="text-lg text-gray-600 mb-8 text-center max-w-md">
            Join us and explore more exciting content! Sign up or log in now to start your journey.
        </p>
        <div class="flex space-x-4">
            <NuxtLink to="/register" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition btn-bg-primary">
                Sign up
            </NuxtLink>
            <NuxtLink to="/login" class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
                Sign in
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>