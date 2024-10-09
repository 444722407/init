<template>
    <div>
        <h1>mine</h1>
        <h1>{{ userInfoStore.avatr }}</h1>
        <h1>{{ userInfoStore.token }}</h1>
    </div>
</template>

<script setup>
    import { useUserInfoStore } from '@/store/user';
    const userInfoStore = useUserInfoStore();

    console.log(userInfoStore.userInfo)
</script>

<style></style>