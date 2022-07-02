<template>
  <div class="min-h-full progress__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px progress__title">m-progress</p>
      <p class="pt-12px pb-16px text-13px leading-20px progress__introduce ">介绍：
      </p>
    </div>

    <p class="mb-12px px-16px">默认样式</p>
    <div class="px-20px">
      <m-progress :height="4" :load-state="loadState">
      </m-progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import MProgress from "@/components/m-progress/index.vue";

const activeNames = ref('1')

const loadState = ref(0)

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

const onClick = () => { }

onMounted(() => {
  const timer = setInterval(() => {
    loadState.value++
    if (loadState.value >= 100) {
      clearInterval(timer)
    }
  }, 200)
})
</script>

<style lang="less" scoped>
.progress {
  &__demo {
    background-color: #f7f8fa;
  }

  &__title {
    color: #323233;
  }

  &__introduce {
    color: #c8c9cc;
  }
}
</style>
