<template>
  <div class="min-h-full xxx__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px xxx__title">m-</p>
      <p class="pt-12px pb-16px text-13px leading-20px xxx__introduce ">介绍：
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认加载" name="1">
        <p></p>
        <van-button type="primary" size="mini" @click="onClick">click</van-button>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">

const activeNames = ref('1')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

const onClick = () => { }
</script>

<style lang="less" scoped>
</style>
