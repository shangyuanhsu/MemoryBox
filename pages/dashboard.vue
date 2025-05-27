<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-4">歡迎來到儀表板！</h1>
        <p class="text-lg text-gray-600">這是登入後的專屬頁面，你可以在這裡查看個人資訊或進行其他操作。</p>
    </div>
</template>

<script lang="ts" setup>
// 指定使用 authenticated 佈局
definePageMeta({
    layout: 'authenticated',
});
</script>