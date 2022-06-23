<template>
  <div class="">

  </div>
</template>

<script setup lang="ts">
// 存储副作用函数的桶
const bucket = new Set()
// 原始数据
const data = { text: 'hello world' }
// 用一个全局变量存储被注册的副作用函数
let activeEffect = '';
// effect 函数用于注册副作用函数
const effect = (fn: any) => {
  // document.body.innerHTML = data.text
  // 当调用 effect 注册副作用函数时，将副作用函数fn赋值给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}
onMounted(() => {
  // effect()
  setTimeout(() => {
    document.body.innerHTML = 'hello vue3'
  }, 1000)
})
const handler = {
  // 拦截读取操作
  get(obj: any, key: string) {
    // // 将副作用函数 effect 添加到存储副作用函数的桶中
    // 将activeEffect中存储副作用的函数收集到桶中
    // bucket.add(effect)
    if (activeEffect) {
      bucket.add(activeEffect)
    }
    // 返回属性值
    return obj[key]
  },
  // 拦截设置操作
  set(obj: any, key: any, newVal: string) {
    // 设置属性值
    obj[key] = newVal
    // 将副作用函数从桶里提取出并执行
    // bucket.forEach(fn=fn())
    // 返回 true 代表设置操作成功
    return true
  }
}
const obj = new Proxy(data, handler)
</script>

<style lang="scss" scoped>
</style>
