<template>
  <div class="p-20px rate">
    <div class="flex items-center">
      <img :src="item.isChecked ? item.fillUrl : item.emptyUrl" v-for="(item, index) in iconList" :key="index"
        class="h-20px mx-3px w-20px" @click="onRateClick(index)" />
    </div>
  </div>
</template>

<script setup lang="ts" name="MRate">
import emptyUrl from './img/stars-empty.png'
import fillUrl from './img/stars-fill.png'
interface IconInfo {
  emptyUrl: string
  fillUrl: string
  isChecked: boolean
}

const props = withDefaults(defineProps<{
  count?: number
}>(), {
  count: 5
})

const iconInfo = ref(
  {
    emptyUrl,
    fillUrl,
    isChecked: false,
  }
)
const iconList = ref<IconInfo[]>([])


const onRateClick = (count: number) => {
  if (count === 0 && iconList.value[0].isChecked) { Toast('最低给一颗星呢亲~') }
  iconList.value = iconList.value.map((item, index) => ({ ...item, isChecked: index <= count }))
}

onMounted(() => {
  for (let index = 0; index < props.count; index++) {
    iconList.value.push(iconInfo.value)
  }
})
</script>

<style lang="less" scoped>
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

