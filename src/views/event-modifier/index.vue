<template>
  <div class="">
    <h3>事件修饰符</h3>
    <!-- once 只触发一次 -->
    <van-button @click.once="onOnceClick">onOnceClick</van-button>

    <!-- 停止事件传递，触发onStopClick -->
    <div @click="onBigBoxClick">
      <van-button @click.stop="onStopClick">onStopClick</van-button>
    </div>
    <van-button @click.self="onSelfClick">onSelfClick</van-button>
    <van-button @click.capture="onCaptureClick">onCaptureClick</van-button>
    <br>

    <input v-model.trim="inputValue"
      type="text"
      @keyup.enter="onEnterChange">
  </div>
</template>

<script setup lang="ts">
const inputValue = ref("");
const onOnceClick = () => {
  console.log("onOnceClick");
};
const onBigBoxClick = () => {
  console.log("onBigBoxClick");
};
const onStopClick = () => {
  console.log("onStopClick");
};
const onSelfClick = () => {
  console.log("onSelfClick");
};
const onCaptureClick = ($event: any) => {
  console.log("onCaptureClick", $event);
};
const onEnterChange = () => {
  console.log(inputValue.value, "inputValueinputValue");
};
</script>

<style lang="scss" scoped>
</style>
