<template>
  <div class="min-h-full progress__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px progress__title">m-progress</p>
      <p class="pt-12px pb-16px text-13px leading-20px progress__introduce ">
        介绍：加载进度条组件，实现原理也很简单，通过一个div来控制底色，再用一个同高的不同色并且动态宽度的标签，充满在里面，实现加载的进度，具体请看 m-progress 中README.md
      </p>
    </div>

    <div class="px-20px pb-20px">
      <p class="pb-20px">默认样式</p>
      <m-progress load-state="10" />
    </div>

    <div class="px-20px pb-20px">
      <p class="pb-20px">给他加一个计时器，让他进行加载效果</p>
      <m-progress :load-state="loadState" />
    </div>

    <div class="px-20px pb-20px">
      <p class="pb-20px">加载条高度</p>
      <m-progress load-state="40" :height="8" />
    </div>

    <div class="px-20px pb-20px">
      <p class="pb-20px">自定义颜色</p>
      <m-progress load-state="30" load-ground-color="red" />
      <br>
      <m-progress load-state="50" load-ground-color="green" ground-color="#969799" />
      <br>
      <m-progress load-state="70" load-ground-color="orange" />
    </div>

    <div class="px-20px pb-20px">
      <p class="pb-20px">增减</p>
      <m-progress class="pb-10px" :load-state="loadStateCount" :height="8" load-ground-color="#68D89E" />
      <van-button type="primary" size="mini" @click="onAddLoadState('add')">+20%</van-button>
      <van-button type="primary" size="mini" @click="onAddLoadState('sub')">-20%</van-button>
    </div>
    <!-- :load-state="  " -->
  </div>
</template>

<script setup lang="ts">
import MProgress from "@/components/m-progress/index.vue";

const activeNames = ref('1')

const loadState = ref(0)
const loadStateCount = ref(30)

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

const onAddLoadState = (type:string)=>{
  if(type==='add'){
    loadStateCount.value = loadStateCount.value > 80 ? 100 : loadStateCount.value + 20
  }else{
    loadStateCount.value = loadStateCount.value < 20 ? 0 : loadStateCount.value - 20
  }
}

const onClick = () => { }

onMounted(() => {
  const timer = setInterval(() => {
    loadState.value++
    if (loadState.value >= 100) {
      clearInterval(timer)
    }
  }, 100)
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
