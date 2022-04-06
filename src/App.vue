<script setup>
import { useWxShare } from '@/hooks/useWxShare'

useWxShare({
  title: '这是标题',
  desc: '这是描述',
  imgUrl: 'http://www.decxagri.com/data/Download/icon.jpeg'
})
</script>
<template>
  <n-message-provider> <router-view></router-view></n-message-provider>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
