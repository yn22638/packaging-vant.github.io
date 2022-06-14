<template>
  <div class="scroll"
    :style="{'height':props.height}">
    <div v-for="(item,index) in 30"
      :key="index">
      <van-image round
        width="10rem"
        height="10rem"
        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ height: string }>(), {
  height: "100vh",
});
</script>

<style lang="less" scoped>
.scroll {
  overflow: auto;
}
</style>
