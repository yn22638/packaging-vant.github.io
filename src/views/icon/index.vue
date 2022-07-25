<template>
  <div class="min-h-full icon__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px xxx__title">m-icon</p>
      <p class="pt-12px pb-16px text-13px leading-20px xxx__introduce ">介绍：m-icon ,通过 iconpark 来完成 icon 的挑选，选取一些常用的 icon
        以供使用，可以改变 icon 的颜色， 大小，动画等
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认样式" name="1">
        <m-icon v-for="(icon, index) in defaultsIconList" class="mx-5px" :name="icon.name" :key="index"></m-icon>
      </van-collapse-item>
      <van-collapse-item title="图标颜色" name="2">
        <p class="py-8px">随机给了颜色， 具体看效果</p>
        <m-icon v-for="(icon, index) in defaultsIconList" class="mx-5px" :name="icon.name" :color="icon.color"
          :key="index"></m-icon>
      </van-collapse-item>
      <van-collapse-item title="图标大小" name="3">
        <p class="py-8px">这里大小是递增给的</p>
        <div class="flex items-center">
          <m-icon v-for="(icon, index) in defaultsIconList" class="mx-5px" :name="icon.name" :size="icon.size"
            :key="index"></m-icon>
        </div>
      </van-collapse-item>
      <van-collapse-item title="实底风格" name="4">
        <div class="flex items-center">
          <m-icon v-for="(icon, index) in fillIconList" class="mx-5px" :name="icon.name" :size="22" :key="index">
          </m-icon>
        </div>
      </van-collapse-item>
      <van-collapse-item title="多色风格" name="5">
        <p class="py-8px">颜色都是随机搭配的哈，不喜勿喷，自己有想法可以传入不通的颜色，去查看满意的效果</p>
        <div class="flex items-center">
          <m-icon v-for="(icon, index) in fillIconList" class="mx-5px" :name="icon.name" :fill="icon.fill"
            :stroke="icon.stroke" :size="22" :key="index">
          </m-icon>
        </div>
      </van-collapse-item>
      <van-collapse-item title="动态旋转/逆时针 顺时针" name="6">
        <div class="flex items-center">
          <p>iconpacrk 组件内部问题，暂时关闭</p>
          <!-- <m-icon v-for="(icon, index) in fillIconList" class="mx-5px" :name="icon.name" :fill="icon.fill"
            :stroke="icon.stroke" :spin="icon.spin" :rtl='icon?.rtl' :size="22" :key="index">
          </m-icon> -->
        </div>
      </van-collapse-item>
    </van-collapse>
    <div class="flex p-20px items-center justify-end">
      <p class=" text-pink-400 inline" @click="onLookAllClick">查看更多
      </p>
      <m-icon name="right" color="#f9a8d4" :size="22">
      </m-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import MIcon from "@/components/m-icon/index.vue";

const router = useRouter()

const activeNames = ref('1')

const defaultsIconList = ref([
  { name: 'emotion-happy', color: 'red', size: '20' },
  { name: 'whale', color: '#974541', size: '26' },
  { name: 'power-60l3am14', color: '#765414', size: '29' },
  { name: 'thumbs-up', color: '#258861', size: '34' }
])

const fillIconList = ref(
  [{
    name: 'preview-open',
    size: 22,
    stroke: '#00BFFF',
    fill: '#90EE90',
    spin: true
  }, {
    name: 'like',
    size: 22,
    stroke: '#4338ca',
    fill: '#34d399',
    spin: true,
    rtl: true
  }, {
    name: 'delete-one',
    size: 22,
    stroke: '#0000FF',
    fill: '#FFE4E1',
    spin: true
  }, {
    name: 'smiling-face',
    size: 22,
    stroke: '#FFD700',
    fill: '#FF1493',
    spin: true,
    rtl: true

  }, {
    name: 'emotion-happy-61ffpg7l',
    size: 22,
    stroke: '#f9ae3d',
    fill: '#5ac725',
    spin: true
  }]
)
// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

const onLookAllClick = () => {
  router.push({ name: 'IconAll' })
}
</script>

<style lang="less" scoped>
.icon {
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
