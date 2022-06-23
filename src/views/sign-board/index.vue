<template>
  <div class="" style="height:100vh">
    <van-button type="primary" @click="signVisible = true">签字</van-button>
    <!-- 签字框 -->
    <m-signature-board v-model:visible='signVisible' @confirm='onConfirmClick'></m-signature-board>
  </div>
</template>

<script setup lang="ts">
import MSignatureBoard from "@/components/m-signature-board/index.vue";

const signVisible = ref(false);

const onConfirmClick = (url: string) => {
  console.log(url);
};
</script>

<style lang="less" scoped>
</style>
