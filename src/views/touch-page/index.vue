<template>
  <!-- 上下滑动 -->
  <div class="container h-100vh w-100vh" ref="wiperRef" @touchstart="onTouchstartChange" @touchend="onTouchendChange"
    @touchmove="onTouchmoveChange">
    <div class="container-list" :style="listStyle">
      <slot :itemHeight="itemHeight">
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const wiperRef = ref()
const startPoint = ref(0)
const itemHeight = ref(0)
const pointChange = ref(0)
const position = ref(0) //显示可滑动的第几页
const wait = ref(0)  //true显示封面
const pageNum = ref(0)

const listStyle = computed(() => {
  let style = {
    top: '',
    transition: '',
    height: itemHeight.value * pageNum.value + 'px',
  }
  if (pointChange.value != 0) {
    //拖动效果
    style.top = pageNum.value == position.value && pointChange.value < 0 || position.value == 1 && pointChange.value > 0 ?
      - itemHeight.value * (position.value - 1) + 'px'
      : - itemHeight.value * (position.value - 1) + pointChange.value + 'px';
    style.transition = "top 0s";
  } else {
    //滚动翻页效果
    style.top = - itemHeight.value * (position.value - 1) + 'px';
    style.transition = "top 1s";
  }
  return style
})

const onTouchstartChange = (e: any) => {
  console.log(e, 'onTouchstartChange');
  startPoint.value = e.touches[0].pageY
}

const onTouchendChange = (e: any) => {
  console.log(e, 'onTouchendChange');
  const poChange = e.changedTouches[0].pageY - startPoint.value
  pointChange.value = poChange
}

const onTouchmoveChange = (e: any) => {
  console.log(e, 'onTouchmoveChange');
  const end = e.changedTouches[0].pageY
  const start = startPoint.value
  const delta = start - end
  let goGown = 0
  delta > 10 ? goGown = 1 : goGown - 1
  changeItem(goGown)
}

const changeItem = (down: number) => {  //down 大于0 往下滑，小于0 往上滑
  pointChange.value = 0;
  if (down > 0 && position.value >= 1 && position.value < pageNum.value) { //往下滑
    position.value = position.value + 1;
  } else if (down < 0 && position.value > 1 && position.value <= pageNum.value) {  //往上滑
    position.value = position.value - 1;
  }
}

const init = () => {
  // let get = $slots.default.filter(item => {
  //   return item.tag != undefined;
  // });
  // pageNum.value = get.length;
}

onMounted(() => {
  init()

  itemHeight.value = wiperRef.value.offsetHeight;  //设置每页高度
  window.onresize = function temp() {
    itemHeight.value = wiperRef.value.offsetHeight;
  };
  setTimeout(function () {
    itemHeight.value = wiperRef.value.offsetHeight;
  }, 1500)
})
</script>

<style lang="less" scoped>
.container {
  background: #c4c4c4;
  overflow: hidden;
  position: relative;

  &-list {
    position: absolute;
    width: 100%;
  }

  // height: 100vh;
  // width: 100vh;
}
</style>
