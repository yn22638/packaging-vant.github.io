<template>
  <div class="">
    children
    <slot></slot>
    <slot name="grade"></slot>

    <grandson title="我是grandson"></grandson>
  </div>
</template>

<script setup lang="ts">
import grandson from "../grandson/index.vue";
</script>

<style lang="scss" scoped>
</style>
