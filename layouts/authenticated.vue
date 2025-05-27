<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <!-- Header -->
        <header class="bg-blue-800 text-white p-4 shadow-md">
            <nav class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold">我的應用</h1>
                <div class="space-x-4">
                    <NuxtLink to="/dashboard" class="hover:underline">儀表板</NuxtLink>
                    <NuxtLink to="/profile" class="hover:underline">個人資料</NuxtLink>
                    <button @click="logout" class="hover:underline">登出</button>
                </div>
            </nav>
        </header>

        <!-- 頁面內容 -->
        <main class="container mx-auto py-8 flex-grow">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-blue-800 text-white p-4">
            <div class="container mx-auto text-center">
                <p>&copy; 2025 我的應用。保留所有權利。</p>
                <div class="mt-2 space-x-4">
                    <a href="#" class="hover:underline">關於我們</a>
                    <a href="#" class="hover:underline">聯繫我們</a>
                    <a href="#" class="hover:underline">隱私政策</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const logout = () => {
    // 模擬登出邏輯，未來可連接到真實的登出 API
    console.log('用戶登出');
    // 例如：導向到首頁
    navigateTo('/');
};
</script>