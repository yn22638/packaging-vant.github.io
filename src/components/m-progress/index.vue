<template>
  <div class="relative">
    <div class="w-full overflow-hidden" ref="progressRef"
      :style="{ height: `${height}px`, backgroundColor: groundColor, borderRadius: `${height}px` }">
      <p class="h-full progressing" :style="{ width: loadStateWeight, backgroundColor: loadGroundColor }"></p>
    </div>
    <div ref="titleRef" class="rounded-full text-fff text-center min-w-2.8em progressing absolute box-border"
      :style="{ left: `${progressWidth}px`, backgroundColor: loadGroundColor, top: '-10px' }">
      <slot name="title">
        {{ `${loadState}%` }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    height?: number
    loadState?: string | number
    groundColor?: string
    loadGroundColor?: string
  }>(), {
  height: 4,
  loadState: 0,
  groundColor: '#ebedf0',
  loadGroundColor: '#1989fa'
})

// const { loadState } = toRefs(props)
const progressRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const progressWidth = ref(0)
const loadStateWeight = ref('0')

// 此处用 watch 会有问题
watchEffect(() => {
  const width = progressRef.value!.clientWidth - titleRef.value!.clientWidth
  if (+props.loadState > 100) {
    progressWidth.value = width
    return
  }
  progressWidth.value = width * (+props.loadState / 100)
  loadStateWeight.value = `${props.loadState}%`
},
  { flush: 'post' }
)

</script>

<style lang="less" scoped>
.transform {
  transform: translate(-50%, 50%)
}

.progressing {
  transition: all 0.5s ease;
}
</style>
