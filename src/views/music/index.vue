<template>
  <div class="">
    <van-cell-group>
      <van-cell v-for="(item) in topList" :key="item.id" :title="item.name" :value="item.song" />
    </van-cell-group>
    <van-button van-button type="primary" @click="onGoBackClick">返回</van-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const topList = ref([
  { name: "我结婚了", song: "阔落", id: "1" },
  { name: "爱与诚", song: "古巨基", id: "2" },
  { name: "山楂树之恋", song: "程佳佳", id: "3" },
  { name: "落空", song: "印子月", id: "4" },
  { name: "我们俩", song: "郭顶", id: "5" },
  { name: "Glosses", song: "HelloPrinz", id: "6" },
  { name: "还是分开", song: "张叶蕾", id: "7" },
]);

const onGoBackClick = () => {
  router.go(-1);
};
</script>

<style lang="less" scoped>
</style>
