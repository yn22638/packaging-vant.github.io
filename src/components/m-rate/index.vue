<template>
  <div class="rate">
    <div :class="['inline-flex', 'items-center', `${isDisable ? 'rate-disable' : 'rate-select'}`]" ref="rateRef">
      <img ref="rateIconRef" :src="item.isChecked ? item.fillUrl : item.emptyUrl" v-for="(item, index) in iconList"
        :key="index" :class="['px-3px', 'box-content']" :style="{
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
const rateRef = ref() // 评分附件 ref
const rateIconRef = ref() // 单个评分Ref
const rateIconWidth = ref(0) // 单个评分宽度
const initScore = ref(0) // 第一次
// touch 思路 https://blog.csdn.net/weixin_42860683/article/details/106801618
const onTouchstartChange = (e: any) => {
  if (e && e.touches.length === 1) {
    rateDivWidth.value = rateRef.value.offsetWidth
    rateIconWidth.value = rateIconRef.value[0].offsetWidth
    startX.value = e.touches[0].clientX
    // console.log(rateIconWidth.value, 'rateIconRef');
  }
}

const onTouchmoveChange = (e: any) => {
  score.value = 0
  if (e) {
    let newScore = parseInt(`${(e.touches[0].clientX - startX.value) / rateDivWidth.value * (props.count + 2)}`)
    if (newScore > 0) {
      const touchValue = newScore > props.count + 2 ? props.count + 2 : newScore
      score.value = initScore.value + touchValue
      // console.log(initScore, 'initScore');
    } else {
      initScore.value = parseInt(`${startX.value / rateIconWidth.value}`)
      // console.log(initScore, 'initScore');
      // console.log(newScore, 'newScore');
      score.value = newScore + initScore.value > props.count + 2 ? props.count + 2 : newScore + initScore.value
      
    }
    // console.log(score.value, 'score.value');
  }
  // 后期需加上怎么滑动都最低有一个评分
  iconList.value = iconList.value.map((item, index) => ({ ...item, isChecked: score.value >= index + 1 }))
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

