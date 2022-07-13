<template>
  <div class="">
    <!-- :style="{'text-align':inputAlign}" -->
    <!-- :disabled="disabled" -->
    <div class="flex item-center justify-center">
      <label for="" v-if="isShowLabel" class="flex-shrink-0 mr-12px"
        :class="type !== 'textarea' ? 'label' : 'textarea-label'">{{ label }}</label>
      <input class="flex-1 h-42px" v-model="modelValue" :type="type" :maxlength="maxlength" :placeholder="placeholder"
        :readonly="disabled" @input="inputChange" v-if="type != 'textarea'">
      <!-- autoHeight="true" -->
      <textarea :class="['flex-1', 'pr-10px']" name="" rows="1" :placeholder="placeholder"
        :style="{ resize: 'none', outline: 'none', height: `${height}px` }" v-else></textarea>
    </div>
    <p v-if="isShowTextLength" class="text-right">
      {{ `${textLength}/${maxlength}` }}
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
  textLength?: string | number,
  placeholder?: string,
  inputAlign?: string,
  disabled?: boolean,
  isShowLabel?: boolean,
  height?: string | number
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
    textLength:0,
    placeholder: '请输入内容',
    inputAlign: 'left',
    disabled: false,
    isShowLabel: false,
    height: '42'
  }
)
// type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

const emits = defineEmits(['update:modelValue'])

const inputChange = (event: Event) => {
  emits('update:modelValue', (event.target as any).value)
}
</script>

<style lang="less" scoped>
.label {
  color: #323233;
  position: relative;
  transform: translateY(27%);
}

.textarea-label {
  color: #323233;
}
</style>
