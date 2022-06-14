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
    <van-overlay :show="isShowOverlay">
      <div class="loading">
        <van-loading type="spinner" color="#1989fa" />
        <p class="text-fff mt-20px">加载中...</p>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
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
