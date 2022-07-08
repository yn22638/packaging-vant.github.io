<template>
  <div class="min-h-full input__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px input__title">m-input</p>
      <p class="pt-12px pb-16px text-13px leading-20px input__introduce ">介绍：通过input原生属性与事件，针对于展示效果，字体颜色，样式等进一步封装
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="默认样式" name="1">
        <m-input v-model="defaultValue" :is-show-text-length="false"></m-input>
        <van-button type="primary" size="mini" @click="onConfirmBtnClick(defaultValue)">提交</van-button>
      </van-collapse-item>
      <van-collapse-item title="统计输入字数/最大输入字数" name="2">
        <m-input v-model="maxLengthValue"></m-input>
        <van-button type="primary" size="mini" @click="onConfirmBtnClick(maxLengthValue)">提交</van-button>
      </van-collapse-item>
      <van-collapse-item title="只读/禁用状态" name="3">
        <p class="pb-12px">通过 readonly 将输入框设置为只读状态，通过 disabled 将输入框设置为禁用状态。</p>
        <m-input v-model="disabledValue" disabled></m-input>
        <van-button type="primary" size="mini" @click="onConfirmBtnClick(disabledValue)">提交</van-button>
      </van-collapse-item>
      <van-collapse-item title="展示 label" name="4">
        <p class="pb-12px">通过 label 标签，将传入的值显示出来。</p>
        <m-input v-model="labelValue" label="我是 label" isShowLabel></m-input>
        <van-button type="primary" size="mini" @click="onConfirmBtnClick(labelValue)">提交</van-button>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import MInput from "@/components/m-input/index.vue";
const activeNames = ref('1')
const defaultValue = ref('')
const maxLengthValue = ref('')
const disabledValue = ref('你好啊，🐻 弟')
const labelValue = ref('')

// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

const onConfirmBtnClick = (value: string) => {
  Toast(`当前输入框的值是：${value}`)
}
// watch(defaultValue, () => {
//   console.log(defaultValue.value);
// })
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

