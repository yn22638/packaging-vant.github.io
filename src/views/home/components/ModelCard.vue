<template>
  <div class="">
    <van-cell-group inset>
      <van-cell :title="item.title" is-link :label="item.label" v-for="item in modelList" :key="generateMixed"
        @click="onCellClick(item)">
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { Notify } from 'vant';
import { modelList } from "./mock-data";
interface ModelInfo {
  name: string
  title: string
  label: string
}
// interface PropsInfo {
//   modelList: ModelInfo[]
// }
// const props = defineProps<PropsInfo>()
const router = useRouter()
const onCellClick = (model: ModelInfo) => {
  console.log(model, 'model');
  model.name ? router.push({ name: model.name }) : Notify({ type: 'success', message: '正在开发中！，敬请期待' })
}
const generateMixed = () => {
  var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var res = "";
  for (var i = 0; i < 7; i++) {
    var id = Math.floor(Math.random() * 36);
    res += chars[id];
  }
  return res;
}
</script>

<style lang="less" scoped>
</style>
