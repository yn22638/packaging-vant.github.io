<template>
  <div class="min-h-full rate__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px rate__title">m-rate</p>
      <p class="pt-12px pb-16px text-13px leading-20px rate__introduce ">
        介绍：通过不同的icon，来实现各种评分效果，具体icon有哪些，可以看[icon组件]，m-rate组件可以动态控制评分的颜色、样式、大小、数量、具体快来试试看吧！
        由于 iconfont 有问题，所有图标暂时用图片，但是图片对比 css 生成的图标，体积大很多，所以后期会改成 iconfont 图标
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认效果" name="1">
        <p class="mb-4px">下面是评分组件的默认效果</p>
        <m-rate></m-rate>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="自定义数量" name="2">
        <p class="mb-4px">这里默认count给了8</p>
        <m-rate :count="8"></m-rate>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="自定义宽高" name="3">
        <p class="mb-4px">这里宽高分别给了30</p>
        <m-rate :height="30" :width="30"></m-rate>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="自定义评分-点赞" name="5">
        <p class="mb-4px">点赞评分效果</p>
        <m-rate :empty-url="emptyUrl" :fill-url="fillUrl"></m-rate>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="自定义评分-花朵" name="6">
        <p class="mb-4px">花朵好评效果</p>
        <m-rate :empty-url="flowerEmptyUrl" :fill-url="flowerFillUrl"></m-rate>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="自定义颜色" name="4">
        <p class="mb-4px">正在开发中~</p>
        <!-- <m-rate></m-rate> -->
      </van-collapse-item>
    </van-collapse>
  </div>
  <!-- <m-rate :count="6"></m-rate> -->
</template>

<script setup lang="ts">
import MRate from '@/components/m-rate/index.vue'
import emptyUrl from '@/assets/fabulous-empty.png'
import fillUrl from '@/assets/fabulous-fill.png'
import flowerEmptyUrl from '@/assets/flower-empty.png'
import flowerFillUrl from '@/assets/flower-fill.png'
const activeNames = ref('1')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

</script>

<style lang="less" scoped>
.rate {

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
