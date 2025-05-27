<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">註冊</h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 font-medium mb-2">用戶名</label>
                    <input id="username" v-model="form.username" type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="輸入用戶名" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 font-medium mb-2">密碼</label>
                    <input id="password" v-model="form.password" type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="輸入密碼" required />
                </div>
                <div class="mb-6">
                    <label for="confirmPassword" class="block text-gray-700 font-medium mb-2">確認密碼</label>
                    <input id="confirmPassword" v-model="form.confirmPassword" type="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="再次輸入密碼" required />
                    <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
                </div>
                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    註冊
                </button>
            </form>
            <p class="mt-4 text-center text-gray-600">
                已經有帳號？<NuxtLink to="/login" class="text-blue-600 hover:underline">立即登入</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 定義表單資料的型別
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
    // 重置錯誤訊息
    errors.value = {};

    // 簡單驗證：檢查密碼是否一致
    if (form.value.password !== form.value.confirmPassword) {
        errors.value.confirmPassword = '密碼與確認密碼不一致';
        return;
    }

    // 模擬註冊邏輯
    console.log('註冊表單提交:', form.value);
    // 未來可在此處呼叫 API，例如：
    // await $fetch('/api/register', { method: 'POST', body: form.value });
    // 模擬成功註冊後導向登入頁面
    navigateTo('/login');
};
</script>