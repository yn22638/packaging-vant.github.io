<template>
  <div class="flex w-full px-10px pt-10px emotion box-border" v-show="show">
    <div v-for="pageIndex of pageCount()" :key="randomKey(pageIndex)" class="w-full p-15px emotion__page box-border">
      <div v-for="line of 3" :key="randomKey(line)" class="flex p-10px justify-between box-border">
        <emotion-icon v-for="(item, index) of 7" :key="randomKey(index)"
          :index="getIconIndex(pageIndex, line, index + 1)" @icon-click="onIconClick"></emotion-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emotionList from './emotion.js'
import emotionIcon from './emotionIcon.vue'

const props = defineProps<{ show: boolean }>()
const emits = defineEmits({
  'icon-click': (value: string) => true,
});

const maxOfPage = 21 // 一页21个
const numOfLine = 7 // 一行7个

const emoList = ref([...emotionList])
// toggleBody: (arg: boolean) => boolean;。
const pageCount = () => Math.ceil(emoList.value.length / maxOfPage)

const randomKey = (index: number) =>
  index + Math.random()

const getIconIndex = (pageIndex: number, line: number, index: number) => {
  if (pageIndex === 1) {
    return numOfLine * line - index
  } else {
    return (pageIndex - 1) * maxOfPage + numOfLine * line - index
  }
}
// 下面算的有问题  有时间需要深入学习一下
// const spliteEmoticonList = (pageIndex: number, line: number) => {
//   const startIndex = pageIndex !== 1 ? numOfLine * line + 21 * pageIndex : numOfLine * line
//   const endIndex = pageIndex !== 1 ? numOfLine * (line + 1) + 21 * pageIndex : numOfLine * (line + 1)
//   const newList = emoList.value.slice(
//     startIndex,
//     endIndex
//   )
//   return newList
// }
const onIconClick = (iconStr: string) => {
  console.log(iconStr);

  emits('icon-click', iconStr)
}
</script>

<style lang="less" scoped>
.emotion {
  height: 180px;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background: #f5f5f5;

  &__page {
    flex-shrink: 0;
  }
}
</style>
