<template>
  <!-- v-html="`./img/${name}.svg`" -->
  <div class="m-icon h-20px w-20px"  :style="style" @click="$emit('click')"></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    /** 是否为多色图标 */
    multicolor?: boolean
    /** 图标颜色 */
    color?: string
    /** 图标大小 需写单位 */
    size?: string
  }>(),
  {
    color: 'currentColor',
    size: 'unset',
    multicolor: false,
  },
)

const style = computed(() => {
  // const name = props.name
  // const url = name.startsWith('http')
  //   ? name
  //   : `https://api.iconify.design/${name}.svg`
  const {name:url} = props
  return {
    color: props.color,
    'font-size': props.size,
    ...(props.multicolor
      ? {
          background: `url(./img/${url}.svg) no-repeat`,
          'background-size': '100% 100%',
          'background-color': 'transparent',
        }
      : {
          mask: `url(./img/${url}.svg) 0% 0% / 100% 100% no-repeat`,
          '-webkit-mask': `url(./img/${url}.svg) 0% 0% / 100% 100% no-repeat`,
          'background-color': 'currentColor',
        }),
  }
})
</script>

<style scoped lang="less">
.m-icon {
  // @apply h-1em w-1em inline-block;
  // vertical-align: -2px;
}
</style>
