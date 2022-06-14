<template>
  <div class="top-or-pageType" v-show="isShowBackTop">
    <transition name="slide-fade">
      <van-icon class="button_blur" name="back-top" @click="bindTop" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const isShowBackTop = ref(false)
const scrollTopH = ref(0)

// 控制返回顶部显示隐藏
const scrollTop = () => {
  scrollTopH.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  if (scrollTopH.value > 100) {
    isShowBackTop.value = true
  } else {
    isShowBackTop.value = false
  }
}

const bindTop = () => {
  // 实现滚动效果
  const timeTop = setInterval(() => {
    // 丝滑
    document.documentElement.scrollTop = scrollTopH.value -= 50
    if (scrollTopH.value <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
  // 下边俩是直接返回顶部 不丝滑
  // window.scrollTo(0, 0)
  // document.documentElement.scrollTop = 0;
}

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', scrollTop)
})
</script>

<style lang="less" scoped>
.top-or-pageType {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 11;

  .button_blur {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    margin-top: 15px;
    text-align: center;
    cursor: pointer;
    font-size: 22px;
    color: #ffffff;
    background: #11a8cd;
    box-shadow: 0 0 15px #11a8cd;
  }
}
</style>
