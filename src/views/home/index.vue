<template>
  <div class="flex h-full home">
    <div class="flex flex-shrink w-full p-16px home-header justify-between overflow-hidden ai-center">
      目录
    </div>
    <div class="flex-1 overflow-auto" @scroll="onScrollChange" id="content-box" ref="contentRef">
      <van-notice-bar left-icon="volume-o" :scrollable="false" class="py-16px">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>一份耕耘,一份收获。</van-swipe-item>
          <van-swipe-item>愿你一生努力,一生被爱。</van-swipe-item>
          <van-swipe-item>哪有什么十全十美，凡事只求半称心。</van-swipe-item>
          <van-swipe-item>白茶清欢无别事，我在等风也等你。</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <model-card class="pb-16px"></model-card>
      <m-back-top :scroll-top-h="scrollTopH" @on-back-top="onBindTop"></m-back-top>
    </div>
    <!-- 目录浮窗 -->
    <div class="flex h-36px text-fff top-150px w-98px catalogue__btn fixed items-center" :style="{
      right: isShowCatalogue ? '0' : '-66px',
    }" @click="isShowCatalogue = !isShowCatalogue">
      <img src="@/assets/catalogue-icon.png" class="h-24px mr-2px ml-8px w-25px" />
      <button class="bg-transparent h-20px text-fff text-14px leading-20px" @click.stop="onCatalogueClick">
        知识小🏡
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModelCard from './components/ModelCard.vue';
import MBackTop from "@/components/m-back-top/PropBackTop.vue";
// 引入本地图片
// const catalogueIcon = import.meta.glob('@/assets/catalogue-icon.svgs')
const contentRef = ref()
const isShowCatalogue = ref(false)
const scrollTopH = ref(0)

const onCatalogueClick = () => {
  Toast('正在开发中！，敬请期待')
}


const onScrollChange = (e: any) => {
  if (isShowCatalogue.value) {
    isShowCatalogue.value = false
  }
  scrollTopH.value = e.target.scrollTop
  // 查询 ts 类型
  // document.querySelector('')?.scroll()
}

const onBindTop = () => {
  const timeTop = setInterval(() => {
    // 丝滑
    contentRef.value.scrollTop = scrollTopH.value -= 50
    if (scrollTopH.value <= 0) {
      clearInterval(timeTop)
    }
  }, 30)
}


</script>

<style lang="less" scoped>
.home {
  background-color: snow;
  flex-direction: column;

  .van-notice-bar {
    margin: 6px 0 16px 0;

    .notice-swipe {
      height: 40px;
      line-height: 40px;
    }
  }

  &-header {
    background-color: hsla(0, 0%, 100%, .7);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }

  .catalogue__btn {
    border-radius: 405px 0 0 405px;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
}
</style>
