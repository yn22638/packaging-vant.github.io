<template>
  <div class="min-h-full loading__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px loading__title">m-loading</p>
      <p class="pt-12px pb-16px text-13px leading-20px loading__introduce ">介绍：纯手动封装，通过背景透明度，来实现底色效果，在运动
        icon，加上animation动画实现动态效果，还可以自定义加载文字，主要运动场景：当我们点击保存或者局部提交，更改数据的时候，网不好或者后端响应慢，那么使用这个加载中的状态，不会出现点击穿透,最后加载完成记得关闭
        loading
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
      <van-collapse-item title="自定义Icon & Text 颜色" name="4">
        <p>点击看效果</p>
        <van-button type="primary" size="mini" @click="onSetLoadingTextColorClick">set click</van-button>
      </van-collapse-item>
      <van-collapse-item title="自定义加载Icon" name="5">
        <p>点击看效果</p>
        <van-button type="primary" size="mini" @click="onSetLoadingIconClick">set click</van-button>
      </van-collapse-item>
      <van-collapse-item title="随机加载Icon & 随机颜色" name="6">
        <p>点击看效果</p>
        <van-button type="primary" size="mini" @click="onRandomLoadingIconClick">set click</van-button>
      </van-collapse-item>
    </van-collapse>
  </div>
  <m-loading :show="isShowOverlay" :loadingText="loadingText" :loading-icon-color="loadingIconColor"
    :loading-text-color="loadingTextColor" :name="loadingIcon"></m-loading>
</template>

<script setup lang="ts">
import MLoading from "@/components/m-loading/index.vue";

const isShowOverlay = ref(false)
const activeNames = ref('1')
const loadingText = ref<string | undefined>(undefined)
const loadingIconColor = ref<string | undefined>(undefined)
const loadingTextColor = ref<string | undefined>(undefined)
const loadingIcon = ref<string | undefined>(undefined)

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

// 修改加载 icon & text颜色
const onSetLoadingTextColorClick = () => {
  init()
  loadingTextColor.value = '#5ac725'
  loadingIconColor.value = '#f9ae3d'
  loadingState(2000)
}

// 随机加载 Icon
const onRandomLoadingIconClick = () => {
  init()
  const iconList = ['loading-four-625c1m9l', 'loading-two', 'loading-one', 'loading', 'loading-three']
  // const colorList = ['#5ac725', '#f9ae3d', '#00BFFF', '#90EE90', '#FFFFFF', '#FF1493', '#FFD700', '#0000FF', '#FFE4E1', '#E6E6FA']
  // const iconColorIndex = Math.floor(Math.random() * colorList.length)
  // const textColorIndex = Math.floor(Math.random() * colorList.length)
  const iconIndex = Math.floor(Math.random() * iconList.length)

  loadingTextColor.value = randomColor()
  loadingIconColor.value = randomColor()
  loadingIcon.value = iconList[iconIndex]
  loadingState(1000)
}

// 修改加载 icon
const onSetLoadingIconClick = () => {
  init()
  loadingTextColor.value = '#00BFFF'
  loadingIconColor.value = '#90EE90'
  loadingIcon.value = 'loading-four-625c1m9l'
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
  loadingTextColor.value = undefined
  loadingIconColor.value = undefined
  loadingIcon.value = undefined
}

// 随机生成颜色
const randomColor = () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return `rgb(${a},${b},${c})`
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
