<template>
  <div class="flex h-full home">
    <div class="flex flex-shrink w-full p-16px home-header justify-between overflow-hidden ai-center">
      目录
    </div>
    <div class="flex-1 overflow-auto">
      <van-notice-bar left-icon="volume-o" :scrollable="false" class="py-16px">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
          <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
          <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <model-card class="pb-16px"></model-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModelCard from './components/ModelCard.vue';

// import { modelList } from "./mock-data";
// const modelList = ref([
//   {
//     type: 'picker',
//     title: '弹出 picker',
//     label: '基于 popup 与 picker 二次封装'
//   }
// ])
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

}
</style>
