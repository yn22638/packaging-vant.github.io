<template>
  <div class="rate">
    <div :class="['inline-flex', 'items-center', `${isDisable ? 'rate-disable' : 'rate-select'}`]" ref="rateRef">
      <img :src="item.isChecked ? item.fillUrl : item.emptyUrl" v-for="(item, index) in iconList" :key="index"
        :class="['mx-3px']" :style="{
          width: `${width}px`, height: `${height}px`
        }" :data-index="index" @touchstart="onTouchstartChange" @touchmove="onTouchmoveChange"
        @click="onRateClick(index)" />
    </div>
  </div>
</template>

<script setup lang="ts" name="MRate">
import emptyUrl from '@/assets/stars-empty.png'
import fillUrl from '@/assets/stars-fill.png'
interface IconInfo {
  emptyUrl: string
  fillUrl: string
  isChecked: boolean
}

const props = withDefaults(defineProps<{
  count?: number
  width?: number | string
  height?: number | string
  emptyUrl?: string
  fillUrl?: string
  isDisable?: boolean
}>(), {
  count: 5,
  width: 20,
  height: 20,
  emptyUrl: '',
  isDisable: false
})

const iconInfo = ref(
  {
    emptyUrl: props.emptyUrl || emptyUrl,
    fillUrl: props.fillUrl || fillUrl,
    isChecked: false,
  }
)
const iconList = ref<IconInfo[]>([])


const onRateClick = (count: number) => {
  if (props.isDisable) return
  if (!count && iconList.value[0].isChecked && !iconList.value[1].isChecked) { Toast('最低给一颗星呢亲~') }
  iconList.value = iconList.value.map((item, index) => ({ ...item, isChecked: index <= count }))
}

const startX = ref(0) // 开始点
const rateDivWidth = ref(0)// 父组件盒子长度
const score = ref(0) // 分数
const rateRef = ref()
// touch 思路 https://blog.csdn.net/weixin_42860683/article/details/106801618
const onTouchstartChange = (e: any) => {
  console.log(e, 'onTouchstartChange');
  if (e && e.touches.length === 1) {
    rateDivWidth.value = rateRef.value.offsetWidth
    startX.value = e.touches[0].clientX
  }
}

const onTouchmoveChange = (e: any) => {
  console.log(e, 'onTouchmoveChange');
  score.value = 0
  if (e) {
    let newScore = parseInt(`${(e.touches[0].clientX - startX.value) / rateDivWidth.value * 10}`)
    score.value = newScore > 10 ? 10 : newScore
    console.log(score.value, 'score.value');
    console.log(rateDivWidth.value, 'rateDivWidth.value');
  }
  if (score.value > 0) {
    iconList.value = iconList.value.map((item, index) => ({ ...item, isChecked: score.value >= index + 1 }))
  } else {
    iconList.value = iconList.value.map(item => ({ ...item, isChecked: false }))
  }
}

onMounted(() => {
  for (let index = 0; index < props.count; index++) {
    let item = { ...iconInfo.value }
    if (props.isDisable) {
      item = { ...item, isChecked: index < 3 }
    }
    iconList.value.push(item)
  }
})
</script>

<style lang="less" scoped>
.rate {
  &-disable {
    cursor: not-allowed;
  }

  &-select {
    cursor: pointer
  }
}

div {
  color: #999;
}

div.checked {
  &.default {
    color: #1BB5F1;
  }

  &.danger {
    color: #ef4f4f;
  }

  &.success {
    color: #37bf4f;
  }

  &.warning {
    color: #FADB14;
  }
}
</style>

