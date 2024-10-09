<template>
<div class="van">
    <h1>home</h1>
    <h1>{{userInfoStore.avatr}}</h1>
    <h1>{{userInfoStore.token}}</h1>
</div>
</template>

<script setup>
    import { useUserInfoStore } from '@/store/user';
    const userInfoStore = useUserInfoStore();

    console.log(userInfoStore.userInfo)
</script>

<style lang="less">
@fontColor:#18af0f;
@fontSize:100px;

.van{
    font-size: @fontSize;
    color: @fontColor;
}

</style>