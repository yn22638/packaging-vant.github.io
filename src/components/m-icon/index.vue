<template>
  <div class="">
    <iconpark-icon :name="name" :color="color" :size="size"></iconpark-icon>
  </div>
</template>

<script setup lang="ts">
interface PropInfo {
  name?: string
  color?: string
  size?: string | number
}
const props = withDefaults(defineProps<PropInfo>(), {
  name: 'like',
  color: '#000',
  size: '16'
})
</script>

<style lang="scss" scoped>
</style>
