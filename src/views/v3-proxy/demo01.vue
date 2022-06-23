<template>
  <div class="p-20px ">
    <p class="text-20px">v3 原理 Proxy 探索</p>
    <p class="pt-12px pb-40px">如果对象里有这个属性，就返回属性值，如果没有，就返回默认值66</p>
    <p>{{ `name:${proxyUser.name}` }}</p>
    <p>{{ `sex:${proxyUser.sex}` }}</p>
    <p>{{ `aeg:${proxyUser.aeg}` }}</p>
    <p>{{ `address:${proxyUser.address}` }}</p>

    <van-button type="primary" size="mini" @click="onSetNameClick">改名字 click</van-button>
  </div>
</template>

<script setup lang="ts">
// userInfo 是代理对象
const userInfo = {
  name: '小明',
  aeg: 18,
  address: '河北省-秦皇岛市'
}

// handel 对象
const handel = {
  get(obj: any, key: any) {
    // 如果对象里有这个属性，就返回属性值，如果没有，就返回默认值66
    return obj.hasOwnProperty(key) ? obj[key] : 66
  },
  set(obj: any, key: any, val: any) {
    obj[key] = val
    return true
  }
}

// new Proxy
const proxyUser = new Proxy(userInfo, handel)

const onSetNameClick = () => {
  proxyUser.aeg = 20
  console.log(proxyUser);

}
</script>

<style lang="less" scoped>
</style>
