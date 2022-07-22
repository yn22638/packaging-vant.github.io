<template>
  <div class="inline-block" :style="{ width: `${size}px`, height: `${size}px` }">
    <!-- :spin="spin" :rtl="rtl"  由于设置 false 不起作用，所以先注释 -->
    <iconpark-icon :name="name" :color="color" :size="size" :fill='fill' :stroke="stroke" :style="style">
    </iconpark-icon>
  </div>
</template>

<script setup lang="ts">
import { StyleHTMLAttributes, StyleValue } from 'vue';

interface PropInfo {
  name?: string
  color?: string
  size?: string | number
  fill?: string
  stroke?: string
  spin?: boolean
  rtl?: boolean
  style?: CSSStyleDeclaration
}
const props = withDefaults(defineProps<PropInfo>(), {
  name: 'thumbs-up',
  color: '#000',
  size: '16',
  fill: '',
  stroke: '',
  spin: false,
  rtl: false,
  style: undefined,
})
</script>

<style lang="scss" scoped>
</style>
