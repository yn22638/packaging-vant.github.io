<template>
  <div class="" v-my-directive v-if="isShow">
    <p class="red">距离隐藏还有{{ time }}秒</p>
  </div>
</template>

<script setup lang="ts">
// 导入的指令同样能够工作，并且能够通过重命名来使其符合命名规范
// import { myDirective as vMyDirective } from './MyDirective.js'

const isShow = ref(true)
const time = ref(5)
const color = 'red'
const vMyDirective = {
  beforeMount: (el: any) => {
    // 在元素上做些操作
    const timer = setTimeout(() => {
      isShow.value = false
      clearTimeout(timer)
    }, 5000)
  }
}
onMounted(() => {
  const timer = setInterval(() => {
    time.value--
    if (time.value === 0) {
      clearInterval(timer)
    }
  }, 1000)
})
</script>

<style lang="less" scoped>
// global 全局样式
// v-bind 绑定css动态值
:global(.red) {
  color: v-bind(color);
}
</style>
