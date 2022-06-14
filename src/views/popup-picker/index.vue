<template>
  <div class="min-h-full popup-picker__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px popup-picker__title">popup-picker</p>
      <p class="pt-12px pb-16px text-13px leading-20px popup-picker__introduce ">介绍：主要采用 popup + picker
        封装出来的组件，好处就是以后用到直接引入这个，不必在写重复的
        popup + picker 了,接下来我们看效果
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="基础用法" name="1">
        <p>很普通的 popup + picker ，点击看效果</p>
        <van-button type="primary" size="mini" @click="onBasisClick">click</van-button>
      </van-collapse-item>
      <van-collapse-item title="默认选中" name="2">
        <p>内置默认选中为 4，那么就是湖州，点击看效果</p>
        <van-button type="primary" size="mini" @click="onSelectIndexClick">click</van-button>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
    <popup-picker :is-viable="isViable" :columns="columns" :default-index="defaultIndex" @close="onClose"
      @change="onPickerChange" @confirm="onConfirmClick"></popup-picker>
  </div>
</template>

<script setup lang="ts">
import PopupPicker from "@/components/m-popup-picker/index.vue";
import type {
  PickerOption,
  PickerColumn,
} from 'vant';

const activeNames = ref(1);
const isViable = ref(false)
const defaultIndex = ref(0)
const columns = ref<PickerOption | PickerColumn>(['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']);

// popup & picker
const onClose = () => {
  isViable.value = false
}

// picker
// change 监听
const onPickerChange = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  console.log(`您选择的是${currentValue}，当前索引${currentIndex}`);
}
// 确认
const onConfirmClick = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  Toast.success(`您选择的是${currentValue}，当前索引${currentIndex}`)
}

const onClickChange = (index: number) => {
  activeNames.value = index
}
// 基础用法
const onBasisClick = () => {
  defaultIndex.value = 0
  isViable.value = true
}

const onSelectIndexClick = () => {
  defaultIndex.value = 4
  isViable.value = true
}
</script>

<style lang="less" scoped>
.popup-picker {

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
