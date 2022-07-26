<template>
  <div class="">
    <h4 class="text-center pt-10rem">该页面不存在 ╮(╯_╰)╭</h4>
    <img class="px-10px pt-20px" src="@/assets/empty-two.svg" alt="">
    <div class="flex justify-center">
      <van-button type="primary" @click="$router.push('/')">
        返回主页
        <van-icon name="revoke" size="18" />
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
// const emptyOne = import.meta.glob('@/assets/empty-one.jpg')
// const emptyTwo = import.meta.glob('@/assets/empty-two.svg')

const emptyBg = ref('')

onMounted(() => {
  const hour = moment().hour()
  // hour =  0 -> 23
  emptyBg.value = `@/assets/${hour > 11 ? 'empty-one.jpg' : 'empty-two.svg'}`
})
</script>

<style lang="less" scoped>
</style>
