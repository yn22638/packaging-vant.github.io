<template>
  <div class="m-loading" v-if="show">
    <iconpark-icon class="m-loading__animation" :name="name" :color="loadingIconColor" :size="size"
      :style="{ width: `${size}px`, height: `${size}px` }">
    </iconpark-icon>
    <p class="mt-10px" :style="{ color: loadingTextColor }">{{ loadingText }}</p>
  </div>
</template>

<script setup lang="ts">
interface PropInfo {
  show: boolean
  loadingText?: string
  loadingTextColor?: string
  loadingIconColor?: string
  name?: string
  color?: string
  size?: string | number
}
const props = withDefaults(
  defineProps<PropInfo>(),
  {
    show: false,
    loadingText: '加载中',
    loadingTextColor: '#FFFFFF',
    loadingIconColor: '#1989fa',
    name: 'loading-one',
    color: '#000',
    size: '25'
  }
)
</script>

<style lang="less" scoped>
.m-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  opacity: 0.7;

  &__animation {
    display: inline-block;
    font-size: 22px;
    animation: loading 1s linear infinite;
    -webkit-animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
