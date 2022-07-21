<template>
  <div class="bg-fff w-full send-box">
    <div class="flex py-6px px-12px send-box__content justify-between items-center">
      <div class="flex rounded-1/2 h-22px w-22px justify-center items-center"
        :class="`${isVoice ? 'bg-fff' : 'bg-primary'}`" @click="onVoiceClick">
        <m-icon :name="`${isVoice ? 'keyboard' : 'voice'}`" :size="18" :color="`${isVoice ? '#525252' : '#FFFFFF'}`"
          @click="onPhotoClick"></m-icon>
      </div>
      <van-field class="content__field" v-model="fieldValue" ref="field" v-show="!isVoice" placeholder="请输入文字"
        @keypress.enter.native="onSendClick" @focus="onFieldFocus" />
      <van-button class="content__voice" :class="{ 'content__voice--active': isSpeak }" type="default" v-show="isVoice"
        size="small" @touchstart.native="onVoiceTouchStart" @touchend.native="onVoiceTouchEnd">
        按住 说话
      </van-button>
      <m-icon class="mr-10px" :name="`${isSmile ? 'emotion-happy' : 'keyboard'}`" size="18" color="#525252"
        @click="onSmileClick"></m-icon>
      <transition name="fade" mode="out-in">
        <m-icon v-if="!fieldValue" name="pic-one" :size="18" color="#525252" @click="onPhotoClick"></m-icon>
        <van-button class="content__send-btn" v-else type="primary" size="small" @click="onSendClick">
          发送
        </van-button>
      </transition>
    </div>
    <div class="send-box__features" v-show="isShowEmotion">
      <m-emotion show @iconClick="onIconClick"></m-emotion>
    </div>
  </div>
</template>

<script setup lang="ts">
import MEmotion from "@/components/m-emotion/index.vue";
import MIcon from "@/components/m-icon/index.vue";
const isVoice = ref(false)
const isSpeak = ref(false)
const isSmile = ref(true)
const isShowEmotion = ref(false)
const fieldValue = ref('')
const field = ref(null)

const onVoiceClick = () => {
  isVoice.value = !isVoice.value
  if (!isVoice.value) {
    nextTick(() => {
      (field.value as any).focus()
    })
  }
  isSmile.value = true
  isShowEmotion.value = false
  // 暂时先不清空
  // fieldValue.value = ''
}

const onSendClick = () => { isShowEmotion.value = false }
const onSmileClick = () => {
  isShowEmotion.value = isSmile.value
  // if (!isShowEmotion.value) return
  isSmile.value = !isSmile.value
}
const onFieldFocus = () => {
  Toast('请输入');
}
const onPhotoClick = () => {
  Toast('选择照片');
}

// 按住说话
const onVoiceTouchStart = (e: any) => {
  e.preventDefault() // 解决touch时触发下拉 松开后无法touchend的情况
  isSpeak.value = true
  isShowEmotion.value = false
  // 每次点击长按按钮 判断上一次录音状态是否还是1 如果是则不再添加新录音
  // 解决长按时报错导致无法touchend的情况
  // if (this.voiceTaskList[this.getVoiceTaskListLength - 1] === 1) return
  // this.voiceTaskList.push(1)
}
const onVoiceTouchEnd = () => {
  isSpeak.value = false
  // this.voiceTaskList[this.getVoiceTaskListLength - 1] = 2
}

const onIconClick = (val: string) => {
  fieldValue.value += val
}

onMounted(() => {
  nextTick(() => {
    (field.value as any).focus()
  })
})
</script>

<style lang="less" scoped>
.send-box {
  box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 0.75);
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid rgba(229, 229, 229, 0.75);
  border-radius: 8px;

  &__content {
    .content {
      &__field {
        background: rgba(153, 153, 153, 0.1);
        border-radius: 6px;
        border: 1px solid rgba(229, 229, 229, 0.75);
        margin: 0 12px;
        height: 36px;
        box-sizing: border-box;
        padding: 6px;
        flex: 1;
      }

      &__voice {
        flex: 1;
        height: 36px;
        margin: 0 12px;
        letter-spacing: 1px;

        &--active {
          &::before {
            opacity: 0.1;
          }
        }
      }

      &__send-btn {
        min-width: 50px;
        border: none;
        border-radius: 4px;
        padding: 0 4px;
        background-color: #2588ff;
      }
    }
  }

  &__features {
    height: 180px;
    background-color: #ececec;
    box-sizing: border-box;
    border-top: 1px solid rgba(229, 229, 229, 0.75);
  }
}
</style>
