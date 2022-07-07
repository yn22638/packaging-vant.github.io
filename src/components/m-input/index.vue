<template>
  <div class="">
    <input class="h-42px w-full" v-model="modelValue" :type="type" :maxlength="maxlength" :placeholder="placeholder"
      @input="inputChange">
    <p v-if="isShowTextLength" class="text-right">
      {{ `${modelValue.length}/${maxlength}` }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface PropInfo {
  modelValue?: string, type?: string, isShowTextLength?: boolean, maxlength?: string | number, placeholder?: string
}
// interface EmitInfo {
//   (event: 'on-blur', modelValue: string): void
// }
const props = withDefaults(
  defineProps<PropInfo>(),
  {
    modelValue: '',
    type: 'text',
    isShowTextLength: true,
    maxlength: 50,
    placeholder: '请输入内容'
  }
)

const emits = defineEmits(['update:modelValue'])

const inputChange = (event: Event) => {
  emits('update:modelValue', (event.target as any).value)
}
</script>

<style lang="scss" scoped>
</style>
