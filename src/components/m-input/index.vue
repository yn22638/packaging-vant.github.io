<template>
  <div class="">
    <input class="h-42px w-full" v-model="value" :type="type" :maxlength="maxlength" :placeholder="placeholder"
      @blur="onBlur">
    <p v-if="isShowTextLength" class="text-right">
      {{ `${value.length}/${maxlength}` }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface PropInfo {
  value?: string, type?: string, isShowTextLength?: boolean, maxlength?: string | number, placeholder: string
}
interface EmitInfo {
  (event: 'blur', value: string): FocusEvent
}
const props = withDefaults(
  defineProps<PropInfo>(),
  {
    value: '',
    type: 'text',
    isShowTextLength: true,
    maxlength: 50,
    placeholder: '请输入内容'
  }
)

const emits = defineEmits<EmitInfo>()

const onBlur = () => {
  emits('blur', props.value)
}
</script>

<style lang="scss" scoped>
</style>
