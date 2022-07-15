<template>
  <div class="min-h-full icon__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px xxx__title">m-icon</p>
      <p class="pt-12px pb-16px text-13px leading-20px xxx__introduce ">介绍：m-icon ,通过 iconpark 来完成 icon 的挑选，选取一些常用的 icon
        以供使用，可以改变 icon 的颜色， 大小，动画等
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认样式" name="1">
        <m-icon></m-icon>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import MIcon from "@/components/m-icon/index.vue";
const activeNames = ref('1')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}
</script>

<style lang="less" scoped>
.icon {
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
