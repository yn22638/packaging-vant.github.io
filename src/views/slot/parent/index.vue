<template>
  <div class="">
    <!-- 
    parent
    <children>
      1`11`
    </children> -->

    <!-- 第二种 -->
    <van-tabs v-model:active="currentTab">
      <van-tab title="children"></van-tab>
      <van-tab title="标签 2"></van-tab>
      <van-tab title="标签 3"></van-tab>
      <van-tab title="标签 4"></van-tab>
    </van-tabs>
    <component :is="tabs"></component>

    <div>
      1111</div>
    <div>
      <children>
        <template #grade>奶娘</template>
      </children>
    </div>
    <van-cell-group>
      <van-field v-model="grandson" label="内容" placeholder="传给子用户的内容" />
      <van-button type="info" @click="onConfirm">确定</van-button>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import children from "../children/index.vue";

const count = ref(0)
let currentTab = ref(0);
const grandson = ref('')
const tabs = computed(() => {
  const map: any = { 0: "children", 1: "" };
  return map[currentTab.value];
});

const onConfirm = () => {
  provide("inputValue", grandson.value);
  grandson.value = ''
}

provide("data", {
  data1: "给子孙的数据1",
  data2: "给子孙的数据2"
});


</script>

<style lang="scss" scoped>
</style>
