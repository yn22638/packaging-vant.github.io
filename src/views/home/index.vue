<template>
  <div class="flex h-full w-full home">
    <div
      class="flex flex-shrink font-bold bg-white/70 w-full p-16px text-22px justify-between overflow-hidden ai-center box-border backdrop-blur-20px dark:bg-hex-121212"
      :class="[isDark ? 'header-theme-dark' : 'header-light-theme']"
    >
      <p class="text-333 dark:text-white/87">目录</p>
      <img
        :src="isDark ? themeDarkIcon : themeLightIcon"
        class="h-24px w-24px light-theme"
        :class="{ 'light-theme': !isDark, 'dark-theme': isDark }"
        @click="toggleDark()"
      />
    </div>
    <div
      class="flex-1 overflow-auto dark:bg-hex-121212"
      @scroll="onScrollChange"
      id="content-box"
      ref="contentRef"
    >
      <van-notice-bar
        left-icon="volume-o"
        :scrollable="false"
        class="dark:bg-hex-181A20"
        :class="{ 'dark-notice-bar': isDark }"
      >
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>一份耕耘,一份收获.</van-swipe-item>
          <van-swipe-item>愿你一生努力,一生被爱.</van-swipe-item>
          <van-swipe-item>哪有什么十全十美，凡事只求半称心.</van-swipe-item>
          <van-swipe-item>白茶清欢无别事，我在等风也等你.</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <model-card class="pb-16px" :isDark="isDark"></model-card>
      <m-back-top
        :scroll-top-h="scrollTopH"
        @on-back-top="onBindTop"
      ></m-back-top>
    </div>
    <!-- 目录浮窗 -->
    <div
      class="flex h-36px text-fff top-150px w-98px catalogue__btn fixed items-center"
      :style="{
        right: isShowCatalogue ? '0' : '-66px',
      }"
      @click="isShowCatalogue = !isShowCatalogue"
    >
      <img
        src="@/assets/catalogue-icon.png"
        class="h-24px mr-2px ml-8px w-25px"
      />
      <div
        class="bg-transparent h-20px text-fff text-14px leading-20px"
        @click.stop="onCatalogueClick"
      >
        知识小🏡
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModelCard from './components/ModelCard.vue'
import MBackTop from '@/components/m-back-top/PropBackTop.vue'
import themeLightIcon from '@/assets/theme-light__icon.png'
import themeDarkIcon from '@/assets/theme-dark__icon.png'
// 引入本地图片
// const catalogueIcon = import.meta.glob('@/assets/catalogue-icon.svgs')
const contentRef = ref()
const isShowCatalogue = ref(false)
const scrollTopH = ref(0)
// 切换主题色
const isDark = useDark()
const toggleDark = useToggle(isDark)

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

  .catalogue__btn {
    border-radius: 405px 0 0 405px;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }

  .light-theme {
    animation: rotate-light 8s linear infinite;
  }
  .dark-theme {
    animation: zoom-dark 2s linear infinite;
  }

  .header-theme-dark {
    box-shadow: 0px 1px 4px 0px rgba(255, 255, 255, 0.06);
  }
  .header-theme-light {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.06);
  }

  :deep(.dark-notice-bar) {
    --van-notice-bar-text-color: #a06af9;
  }

  @keyframes rotate-light {
    0% {
      transform: rotate(0) translate(0) scale(1);
    }
    100% {
      transform: rotate(1turn) translate(0) scale(1);
    }
  }
  @keyframes zoom-dark {
    0% {
      transform: rotate(0) translate(0) scale(1);
    }
    20% {
      transform: rotate(0) translate(0) scale(1.2);
    }
    40% {
      transform: rotate(0) translate(0) scale(1.3);
    }
    60% {
      transform: rotate(0) translate(0) scale(1.2);
    }
    80% {
      transform: rotate(0) translate(0) scale(1.1);
    }
    100% {
      transform: rotate(0) translate(0) scale(1);
    }
  }
}
</style>
