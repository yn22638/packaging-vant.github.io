<template>
  <!-- 主要试一下provide/inject -->
  <div class="">
    {{ title }}
    <div>
      {{ data1 + '-count' }}
      {{ data2 + '-count' }}
    </div>
    {{ '父组件传过来的内容: ' + input }}
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
// const count = inject<number>('count') // 类型：number | undefined
const { data1, data2 } = inject('data', { data1: '', data2: '' })
const input = inject<string>('inputValue', '')
</script>

<style lang="scss" scoped>
</style>
