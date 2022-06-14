<template>
  <div class=""
    style="height:100vh">
    <van-button type="primary"
      @click="signVisible=true">签字</van-button>
    <br>
    <br>
    <van-button type="primary"
      @click="onGoPopup">进入popup</van-button>

    <!-- 签字框 -->
    <signature-board v-model:visible='signVisible'
      @confirm='onConfirmClick'></signature-board>
  </div>
</template>

<script setup lang="ts">
import signatureBoard from "@/components/signature-board/index.vue";
const router = useRouter();
const signVisible = ref(false);
const onConfirmClick = (url: string) => {
  console.log(url);
};
const onGoPopup = () => {
  router.push({ path: "/today-popup" });
};
</script>

<style lang="scss" scoped>
</style>
