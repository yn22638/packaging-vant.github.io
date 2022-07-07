<template>
  <div class="min-h-full input__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px input__title">m-input</p>
      <p class="pt-12px pb-16px text-13px leading-20px input__introduce ">介绍：通过input原生属性与事件，针对于展示效果，字体颜色，样式等进一步封装
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认样式" name="1">
        <m-input :value="defaultValue" :is-show-text-length="false" @on-blur="onBlurDeafult"></m-input>
      </van-collapse-item>
      <van-collapse-item title="统计输入字数/最大输入字数" name="2">
        <m-input :value="maxLengthValue" @on-blur="onBlurMaxLength"></m-input>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import MInput from "@/components/m-input/index.vue";
const activeNames = ref('1')
const defaultValue = ref('')
const maxLengthValue = ref('')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}
const onBlurDeafult = (value: string) => {
  defaultValue.value = value
  Toast(`当前输入框的值是：${value}`)
}
const onBlurMaxLength = (value: string) => {
  maxLengthValue.value = value
  Toast(`当前输入框的值是：${value}`)
}
const onClick = () => { }
</script>

<style lang="less" scoped>
.input {
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

