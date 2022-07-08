<template>
  <div class="">
    <!-- :style="{'text-align':inputAlign}" -->
    <!-- :disabled="disabled" -->
    <div class="flex item-center justify-center">
      <label for="" v-if="isShowLabel" class="flex-shrink-0 mr-12px ">{{ label }}</label>
      <input class="flex-1 h-42px" v-model="modelValue" :type="type" :maxlength="maxlength" :placeholder="placeholder"
        :readonly="disabled" @input="inputChange">
    </div>
    <p v-if="isShowTextLength" class="text-right">
      {{ `${modelValue.length}/${maxlength}` }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface PropInfo {
  modelValue?: string,
  label?: string,
  type?: string,
  isShowTextLength?: boolean,
  maxlength?: string | number,
  placeholder?: string,
  inputAlign?: string,
  disabled?: boolean,
  isShowLabel?: boolean
}
// interface EmitInfo {
//   (event: 'on-blur', modelValue: string): void
// }
const props = withDefaults(
  defineProps<PropInfo>(),
  {
    modelValue: '',
    type: 'text',
    label: '文本',
    isShowTextLength: true,
    maxlength: 50,
    placeholder: '请输入内容',
    inputAlign: 'left',
    disabled: false,
    isShowLabel: false
  }
)
// type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

const emits = defineEmits(['update:modelValue'])

const inputChange = (event: Event) => {
  emits('update:modelValue', (event.target as any).value)
}
</script>

<style lang="scss" scoped>
</style>
