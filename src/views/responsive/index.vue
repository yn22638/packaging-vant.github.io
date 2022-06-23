<template>
  <div class="">
    {{ plusOne }}

    <van-button @click="onAddClick">+1</van-button>
  </div>
</template>

<script setup lang="ts">
// 这会在一个副作用就要运行之前被设置
// 我们会在后面处理它
// let activeEffect: ''

// function track(target: any, key: any) {
//   if (activeEffect) {
//     const effects = getSubscribersForProperty(target, key)
//     effects.add(activeEffect)
//   }
// }


// const reactive = (obj: any) => {
//   return new Proxy(obj, {
//     get(target, key) {
//       track(target, key)
//       return target[key]
//     },
//     set(target, key, value) {
//       trigger(target, key)
//       target[key] = value
//     }
//   })
// }
// const ref = (value) => {
//   const refObject = {
//     get value() {
//       track(refObject, 'value')
//       return value
//     },
//     set value(newValue) {
//       trigger(refObject, 'value')
//       value = newValue
//     }
//   }
//   return refObject
// }
const count = ref(0)
const onAddClick = () => count.value++
const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 被追踪为依赖时触发
    console.log(e);

    debugger
  },
  onTrigger(e) {
    // 当 count.value 被更改时触发
    console.log(e);
    debugger
  }
})

</script>

<style lang="less" scoped >
</style>
