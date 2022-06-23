<template>
  <div class="">

    {{ '当前选择的是：' + curren }}
    <div>
      <van-button type="primary" @click="isShowaAction = true">
        请选择
      </van-button>
    </div>
    <van-action-sheet v-model:show="isShowaAction" :actions="actions" cancel-text="取消" close-on-click-action
      @cancel="onActionCancelClick" @select="onActionSelectClick" />
    <m-loading :show="isShowOverlay"></m-loading>
  </div>
</template>

<script setup lang="ts">
import MLoading from "@/components/m-loading/index.vue";
const isShowaAction = ref(false);
const isShowOverlay = ref(true);
const curren = ref('')
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
];
const onActionCancelClick = () => Toast('取消');
const onActionSelectClick = (e: { name: string }) => {
  const { name } = e
  curren.value = name
}
// const closeSetTimeOut = () => {

// }
onMounted(async () => {
  console.log('11111111');
  setTimeout(() => {
    isShowOverlay.value = false
  }, 3000);
})
</script>

<style lang="less" scoped>
</style>
