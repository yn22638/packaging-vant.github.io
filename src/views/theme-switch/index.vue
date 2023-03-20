<template>
  <div class="">
    <div>{{ useUser.name }} - {{ useUser.id }}</div>
    <van-button type="primary" @click="toggleDark()">{{
      isDark ? '深色' : '亮色'
    }}</van-button>
    <div class="dark:text-green-400 light:text-red-400">
      <p>哈哈哈</p>
      <p>嘻嘻</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const useUser = useUserStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)

onMounted(() => {
  console.log(useUser.name, 'user')
})
</script>

<style lang="scss" scoped></style>
