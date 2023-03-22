<template>
  <div class="">
    <van-cell-group :class="{ 'dark-cell': isDark }" inset>
      <van-cell
        :title="item.title"
        is-link
        :label="item.label"
        v-for="item in modelList"
        :key="generateMixed"
        @click="onCellClick(item)"
      >
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { modelList } from './mock-data'
interface ModelInfo {
  name: string
  title: string
  label: string
}
// interface PropsInfo {
//   modelList: ModelInfo[]
// }
const props = withDefaults(
  defineProps<{
    isDark: boolean
  }>(),
  {
    isDark: false,
  }
)
const router = useRouter()
const onCellClick = (model: ModelInfo) => {
  console.log(model, 'model')

  model.name
    ? router.push({ name: model.name })
    : Toast('正在开发中！，敬请期待')
}
const generateMixed = () => {
  var chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  var res = ''
  for (var i = 0; i < 7; i++) {
    var id = Math.floor(Math.random() * 36)
    res += chars[id]
  }
  return res
}
</script>

<style lang="less" scoped>
:deep(.dark-cell) {
  .van-cell:after {
    border: none;
  }
  --van-cell-background-color: #262a34;
  .van-cell__title {
    span {
      color: rgba(255, 255, 255, 0.87);
    }
    div {
      color: #5e6272;
    }
  }
}
</style>
