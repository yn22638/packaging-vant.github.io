<template>
  <div class="min-h-full progress__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px progress__title">m-progress</p>
      <p class="pt-12px pb-16px text-13px leading-20px progress__introduce ">
        介绍：加载进度条组件，实现原理也很简单，通过一个div来控制底色，再用一个同高的不同色并且动态宽度的标签，充满在里面，实现加载的进度，具体请看 m-progress 中README.md
      </p>
    </div>

    <p class="p-16px">默认样式</p>
    <div class="px-20px">
      <m-progress />
    </div>
    <!-- :load-state="  " -->
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
