<template>
  <div class="h-24px w-24px icon" :style="{
    'background-image': iconUrl
  }" :data-index='index' @click="onIconClick"></div>
</template>

<script lang="ts" setup>
import emotionList from './emotion.js'

const props = defineProps<{
  index: number
}>();
const emits = defineEmits({
  'icon-click': (value: string) => true,
});

// const emotionList = ref([...emotionList])
const name = computed(() => emotionList[props.index])

const iconUrl = computed(() => `url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${props.index}.gif)`)
const onIconClick = () => {
  console.log();

  emits('icon-click', `[${name.value}]`)
}
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
}
</style>
