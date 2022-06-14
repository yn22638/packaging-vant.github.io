<template>
  <div class="">
    <van-button type="danger"
      @click="router.go(-1)">
      返回
    </van-button>
    <div class="empty-box"></div>
    <van-circle v-model:current-rate="currentRateOne"
      :rate="targetRateOne"
      :speed="50"
      :stroke-width="60"
      :color="gradientColor"
      :text="`${currentRateOne}%`" />
    <div class="empty-box"></div>
    <van-circle v-model:current-rate="currentRateTwo"
      :rate="targetRateTwo"
      :stroke-width="60"
      :size='140'
      :color="gradientColor"
      :text="`${currentRateTwo}%`" />
    <div class="empty-box"></div>
    <div class="slider-box">
      <van-slider v-model="sliderValue"
        disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const route = useRoute();
const router = useRouter();

const currentRateOne = ref(0);
const targetRateOne = ref(100);
const currentRateTwo = ref(0);
const targetRateTwo = ref(0);
const sliderValue = ref(0);
const gradientColor = {
  "0%": "#3fecff",
  "100%": "#6149f6",
};

onMounted(() => {
  const targetRateTwoTimer = setInterval(() => {
    // 这样写会出现slider超出去，因为slider最大100，并且会超出去
    targetRateTwo.value === 100
      ? clearInterval(targetRateTwoTimer)
      : targetRateTwo.value++ && sliderValue.value++;
  }, 1000);
});

watch(
  () => sliderValue.value,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* sliderValue 被整个替换了
    console.log(newValue, oldValue);
  },
  { deep: true }
);
</script>

<style lang="less" scoped>
.slider-box {
  padding: 0 20px;
}
.empty-box {
  padding: 20px 0;
}
</style>
