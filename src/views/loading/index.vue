<template>
  <div class="min-h-full loading__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px loading__title">m-loading</p>
      <p class="pt-12px pb-16px text-13px leading-20px loading__introduce ">介绍：主要采用 overlay + loading
        封装出来的组件，因为我们点击保存或者局部提交，更改数据的时候，网不好或者后端响应慢，那么使用这个加载中的状态，不会出现点击穿透，并且文案与加载事件由您来控制
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认加载" name="1">
        <p>全屏加载状态 ，点击看效果</p>
        <van-button type="primary" size="mini" @click="onShowLoadingClick">click</van-button>
      </van-collapse-item>
      <van-collapse-item title="自定义加载标题" name="2">
        <p>点击看效果</p>
        <van-button type="primary" size="mini" @click="onSetLoadingTextClick">set click</van-button>
      </van-collapse-item>
      <van-collapse-item title="自定义加载时间" name="3">
        <p>下面按钮数字对应不同的加载时间，单位为秒，快来点击看效果吧！</p>
        <van-button type="primary" size="mini" @click="onSetLoadingTimeClick(5)">0.5s click</van-button>
        <van-button type="success" size="mini" @click="onSetLoadingTimeClick(30)">3s click</van-button>
        <van-button type="danger" size="mini" @click="onSetLoadingTimeClick(60)">6s click</van-button>
        <van-button type="warning" size="mini" @click="onSetLoadingTimeClick(100)">10s click</van-button>
      </van-collapse-item>
    </van-collapse>
  </div>
  <m-loading :show="isShowOverlay" :loadingText="loadingText"></m-loading>
</template>

<script setup lang="ts">
import MLoading from "@/components/m-loading/index.vue";

const isShowOverlay = ref(false)
const loadingText = ref<string | undefined>(undefined)
const activeNames = ref('1')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}
// 普通加载
const onShowLoadingClick = () => {
  init()
  loadingState(2000)
}
// 修改加载文字
const onSetLoadingTextClick = () => {
  init()
  loadingText.value = '你好，我是自定义标题哈'
  loadingState(2000)
}
// 设置加载时间
const onSetLoadingTimeClick = (time: number) => {
  init()
  loadingState(time * 100)
}
// 此处需要一个 hooks 避免多次点击
const loadingState = (time: number) => {
  isShowOverlay.value = true
  setTimeout(() => {
    isShowOverlay.value = false
  }, time);
}
// 初始化
const init = () => {
  loadingText.value = undefined
}
</script>

<style lang="less" scoped>
.loading {

  &__demo {
    background-color: #f7f8fa;
  }

  &__title {
    color: #323233;
  }

  &__introduce {
    color: #c8c9cc;
  }
}
</style>
