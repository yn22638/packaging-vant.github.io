<template>
  <van-popup v-model:show="isViable" :position="position" :overlay="overlay" :duration="duration"
    :lockScroll="lockScroll" :round="round" :closeOnClickOverlay="closeOnClickOverlay" :closeable="closeable"
    :closeIcon="closeIcon" :closeIconPosition="closeIconPosition" :safeAreaInsetTop="safeAreaInsetTop"
    :safeAreaInsetBottom="safeAreaInsetBottom" @click-overlay="onCloseClick">
    <van-picker :title="title" :columns="columns" :defaultIndex="defaultIndex" :confirmButtonText="confirmButtonText"
      :cancelButtonText="cancelButtonText" :itemHeight="itemHeight" :loading="loading" :showToolbar="showToolbar"
      :visibleItemCount="visibleItemCount" :swipeDuration="swipeDuration" :toolbarPosition="toolbarPosition"
      :columns-field-names="customFieldName" @confirm="onConfirmClick" @cancel="onCloseClick" @change="onChange">
    </van-picker>
  </van-popup>
</template>

<script setup lang="ts">
import type {
  PopupPosition,
  PopupCloseIconPosition,
  PickerOption,
  PickerColumn,
  PickerFieldNames,
  PickerToolbarPosition,
} from 'vant';
interface EmitInfo {
  (event: 'close'): void
  (event: 'change', currentValue: PickerOption | PickerOption[], currentIndex: number | number[]): void
  (event: 'confirm', currentValue: PickerOption | PickerOption[], currentIndex: number | number[]): void
}
const props = withDefaults(
  defineProps<{
    isViable: boolean
    position?: PopupPosition
    overlay?: boolean
    round?: boolean
    lockScroll?: boolean
    closeOnClickOverlay?: boolean
    closeable?: boolean
    closeIconPosition?: PopupCloseIconPosition
    closeIcon?: string
    duration?: number | string
    safeAreaInsetTop?: boolean
    safeAreaInsetBottom?: boolean
    title?: string
    columns: (PickerColumn | PickerOption)[],
    confirmButtonText?: string
    cancelButtonText?: string
    toolbarPosition?: PickerToolbarPosition
    loading?: boolean
    showToolbar?: boolean
    defaultIndex?: number | string
    itemHeight?: number | string
    visibleItemCount?: number | string
    swipeDuration?: number | string
    customFieldName?: PickerFieldNames
  }>(),
  {
    // popup
    isViable: false, // 是否显示popup
    position: 'bottom', // 位置
    overlay: true, // 遮罩层
    duration: 0.3, // 动画时长，单位秒，设置为 0 可以禁用动画
    round: false, // 是否显示圆角
    lockScroll: true, // 是否锁定背景滚动
    closeOnClickOverlay: true, // 是否在点击遮罩层后关闭
    closeable: false, // 是否显示关闭图标
    closeIcon: 'cross', // 关闭图标名称或图片链接，等同于 Icon 组件的 name 属性
    closeIconPosition: 'top-right',// 关闭图标位置，可选值为 top-left bottom- left bottom - right
    safeAreaInsetTop: false, // 是否开启顶部安全区适配
    safeAreaInsetBottom: false, // 是否开启底部安全区适配
    // picker
    title: '请选择', // 默认标题
    columns: () => ([]), // 列表内容
    confirmButtonText: '确认', // 确认按钮文案
    cancelButtonText: '取消', // 取消按钮文案
    toolbarPosition: 'top', // 取消按钮文案
    loading: false, // 是否显示加载状态
    showToolbar: true, // 是否显示顶部标栏
    defaultIndex: 0, // 单列选择时，默认选中项的索引
    itemHeight: 44, // 选项高度，支持 px vw vh rem 单位，默认 px
    visibleItemCount: 6, // 可见的选项个数
    swipeDuration: 1000, // 快速滑动时惯性滚动的时长，单位 ms
    customFieldName: () => ({
      text: 'text',
      values: 'values',
      children: 'children'
    }), // 自定义 columns 结构中的字段
  }
)
const { closeOnClickOverlay } = toRefs(props)

const emits = defineEmits<EmitInfo>()

const onCloseClick = () => {
  closeOnClickOverlay.value && emits('close')
}
const onChange = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  emits('change', currentValue, currentIndex)
}
const onConfirmClick = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  emits('confirm', currentValue, currentIndex)
  emits('close')
}
</script>

<style lang="scss" scoped>
</style>
