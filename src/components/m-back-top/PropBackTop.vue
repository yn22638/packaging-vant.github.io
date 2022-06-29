<template>
  <div class="top-or-pageType" v-show="isShowBackTop">
    <transition name="slide-fade">
      <van-icon class="button_blur" name="back-top" @click="emits('on-back-top')" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const isShowBackTop = ref(false)

const props = defineProps<{
  scrollTopH: number
}>()

const emits = defineEmits<{
  (event: 'on-back-top'): void
}>()

watch(
  () => props.scrollTopH,
  (newVal, oldVal) => {
    console.log(newVal);

    isShowBackTop.value = newVal > 60
  }
)
</script>

<style lang="less" scoped>
.top-or-pageType {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 11;

  .button_blur {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    margin-top: 15px;
    text-align: center;
    cursor: pointer;
    font-size: 22px;
    color: #ffffff;
    background: #11a8cd;
    box-shadow: 0 0 15px #11a8cd;
  }
}
</style>
