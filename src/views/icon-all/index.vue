<template>
  <div class="p-16px icon-all">
    <div class="bg-fff rounded-xl flex flex-wrap px-6px">
      <div class="flex flex-col h-100px w-110px justify-center items-center" v-for="(icon, index) in iconList"
        :key="index" @click="onCopyClick(icon)">
        <m-icon :name="icon" :size="24">
        </m-icon>
        <p class="pt-10px text-12">{{ icon }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iconList } from "./icon-data";
import MIcon from "@/components/m-icon/index.vue";
const copyText = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.cssText =
    'position:fixed;top:0;left:0;opacity:0;z-index:-99;'
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, text.length)
  document.execCommand('copy')
  document.body.removeChild(textarea)
}
const onCopyClick = (icon: string) => {
  copyText(`<m-icon name="${icon}" />`)
  Toast(`<m-icon name="${icon}" /> 复制成功`)
}</script>

<style lang="less" scoped>
.icon-all {
  min-height: 100vh;
  background-color: #e8e8e8;
}
</style>
