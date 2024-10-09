<template>
  <router-view></router-view>
</template>

<script setup >
    import {useUserInfoStore} from '@/store/user';

    const userInfoStore = useUserInfoStore();
    userInfoStore.userInfo = {
        avatr:'1111111',
        token:"askhghio",
    }
    console.log(userInfoStore.userInfo)
    
</script>

<style>
</style>