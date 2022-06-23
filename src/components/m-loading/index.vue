<template>
  <van-overlay :show="show">
    <div class="loading">
      <van-loading type="spinner" color="#1989fa" />
      <p class="mt-20px text-fff">{{ loadingText }}</p>
    </div>
  </van-overlay>
</template>

<script setup lang="ts">
interface PropInfo {
  show: boolean, loadingText?: string
}
const props = withDefaults(
  defineProps<PropInfo>(),
  { show: false, loadingText: '加载中...' }
)
</script>

<style lang="less" scoped>
::v-deep {
  .loading {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
}
</style>
