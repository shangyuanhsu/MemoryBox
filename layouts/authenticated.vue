<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <!-- Header -->
        <header class="text-white p-4 shadow-md bg-primary">
            <nav class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold">My Application</h1>
                <div class="space-x-4">
                    <NuxtLink to="/dashboard" class="hover:underline">Dashboard</NuxtLink>
                    <NuxtLink to="/profile" class="hover:underline">Profile</NuxtLink>
                    <button @click="logout" class="hover:underline">Logout</button>
                </div>
            </nav>
        </header>

        <!-- Page Content -->
        <main class="container mx-auto py-8 flex-grow">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="text-white p-4 bg-primary">
            <div class="container mx-auto text-center">
                <p>© 2025 My Application. All rights reserved.</p>
                <div class="mt-2 space-x-4">
                    <a href="#" class="hover:underline">About Us</a>
                    <a href="#" class="hover:underline">Contact Us</a>
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const logout = () => {
    // Simulate logout logic, can be connected to a real logout API in the future
    console.log('User logged out');
    // For example: Redirect to home page
    navigateTo('/');
};
</script>