<template>
  <div class="">
    <van-popup class="" v-model:show="visible" :close-on-click-overlay='false' :overlay-style="{ zIndex: 1000 }"
      safe-area-inset-bottom position="bottom" :style="{ height: '315px', zIndex: 1001 }"
      @click-overlay='onOverlayCancelClick'>
      <div class="py-10px px-16px popup-header">
        <p class="text-666" @click="onOverlayCancelClick">取消</p>
        <p class="" style="color:#1989fa" @click="onConfimClick('min')">确认</p>
      </div>
      <div class="popup-board">
        <!-- 签字框 -->
        <signature-board signatureIdName='boardmin' signatureType='signatureMin' ref="signatureMinRef"
          @on-signature-img="onSignatrueConfirm" @is-click-text='onClickTextChange'></signature-board>
        <div class="popup-board__edit">
          <div @click="onClearBoardClick">
            <van-icon name="replay" />
            <span class="ml-7">重签</span>
          </div>
          <div @click="isShowMaxBoard = true">
            <van-icon name="expand-o" />
            <span class="ml-7">全屏</span>
          </div>
        </div>
      </div>
    </van-popup>
    <van-overlay class="overlay-board" :show="isShowMaxBoard" z-index="1007">
      <div class="" style="position: relative;">
        <!-- transform: rotate(90deg) -->
        <div class="overlay-board__max" :style="{ height: paintWidth, width: paintHeight }">
          <div class="control-strip overlay-board__header">
            <div style="z-index:20000" @click="onOverlayCancelClick">
              <van-icon name="https://static.weixiaotong.com.cn/static/icon/mobile_zjll/intelligentForm/goBack.png"
                class="goback-icon" />
              <span class="ml-7 text-666">取消</span>
            </div>
            <div class="d-flex" style="z-index:20000">
              <div class="d-flex ai-center" @click="onClearBoardClick">
                <van-icon name="replay" />
                <span class="ml-7">重签</span>
              </div>
              <div class="px-16">|</div>
              <div class="text-primary" @click="onConfimClick('max')">确定</div>
            </div>
          </div>
          <signature-board class="max-board" signatureIdName='boardmax' ref="signatureMaxRef"
            signatureType='signatureMax' @on-signature-img="onSignatrueConfirm" @is-click-text='onClickTextChange'>
          </signature-board>
        </div>
      </div>
    </van-overlay>

  </div>
</template>

<script setup lang="ts">
import SignatureBoard from "./SignatureBoard.vue";
interface Props {
  visible: boolean
}
const props = defineProps<Props>();
// ****
// const visible = computed(() => {
//   get: () => props.visible;
//   set: (val: boolean) => emits("update:visible", val);
// });


// 为组件的 emit 标注类型
// 运行时
// const emits = defineEmits(["confirm", "update:visible"]);、
// 基于类型 （推荐）
const emits = defineEmits<{
  (event: 'confirm', value: string): void,
  (event: 'update:visible', value: boolean): void,

}>()
// ref<InstanceType<typeof SignatureBoard>>(null) ref类型定义
const signatureMinRef = ref(null);
const signatureMaxRef = ref(null);
const isShowMaxBoard = ref(false);
const paintWidth = ref("");
const paintHeight = ref("");
const isClickText = ref(false);
// 取消弹窗
const onOverlayCancelClick = () => {
  isShowMaxBoard.value = false;
  onClearBoardClick();
  emits("update:visible", false);
};
const boradSize = () => {
  let body = document.documentElement;
  // set width/height
  paintWidth.value = body.offsetWidth * 0.83 + 46 + "px";
  paintHeight.value = body.offsetHeight * 0.9 + 47 + "px";
};
// 确定
const onConfimClick = (val: string) => {
  if (isClickText.value) {
    return;
  }
  nextTick(() => {
    val === "min"
      ? (signatureMinRef.value as any).onConfimClick()
      : (signatureMaxRef.value as any).onConfimClick();
  });
};
const onClickTextChange = (val: boolean) => {
  isClickText.value = val;
};
// 重签
const onClearBoardClick = () => {
  nextTick(() => {
    (signatureMinRef.value as any)?.onClearCanvasClick();
    (signatureMaxRef.value as any)?.onClearCanvasClick();
  });
};
const onSignatrueConfirm = (img: string) => {
  /**
   * 签名图片
   */
  isShowMaxBoard.value = false;
  emits("confirm", img);

  onClearBoardClick();
  emits("update:visible", false);
};

onMounted(() => {
  boradSize();
  const vm = getCurrentInstance();
  // console.log(vm, "vm");
});
</script>

<style lang="less" scoped>
.popup {
  &-header {
    display: flex;
    justify-content: space-between;
    // padding: 0 15px;
    font-size: 16px;
  }

  &-board {
    position: fixed;
    left: 15px;
  }

  &-board__edit {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    font-size: 15px;
    color: #666;
    position: relative;
    top: 10px;
    z-index: 100;
  }
}

.overlay-board {
  display: flex;
  align-items: center;
  justify-content: center;

  &__max {
    transform: rotate(90deg);
    background: #ffffff;

    .control-strip {
      .goback-icon {
        transform: rotate(-90deg);
      }
    }
  }

  &__header {
    height: 44px;
    color: #333;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 0 17px;
    justify-content: space-between;
  }
}

.ml-7 {
  margin-left: 7px;
}

.text-666 {
  color: #666;
}

.d-flex {
  display: flex;
}

.ai-center {
  align-items: center;
}

.px-16 {
  padding: 0 16px;
}

.max-board {
  transform: rotate(270deg);
  position: relative;
  top: -150px;
}
</style>
