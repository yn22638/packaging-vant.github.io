<template>
  <div class="canvas-board"
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false">
    <div :id="signatureIdName"
      class="opacity-9"
      style="zIndex:1"></div>
    <p class="canvas-board__text"
      :class="{'text-rotate':signatureType!='signatureMin'}">签字区域</p>
  </div>
</template>

<script setup lang="ts">
import DrawingBoard from "@bryanadamss/drawing-board";
const props = withDefaults(
  defineProps<{ signatureType: string; signatureIdName: string }>(),
  {
    signatureType: "signatureMin",
    signatureIdName: "",
  }
);
const PARNT_IMG = ref(
  "https://static.weixiaotong.com.cn/static/icon/mobile_zjll/intelligentForm/boardBgc.jpg"
);
const board: any = ref(null);
const canvasInfo = ref({ paintWidth: 0, paintHeight: 0 });
const init = () => {
  /**
   * canvas signature
   */
  let body = document.documentElement;
  // set width/height
  let paintWidth =
    props.signatureType === "signatureMin"
      ? body.offsetWidth * 0.92
      : body.offsetWidth * 0.83;
  let paintHeight =
    props.signatureType === "signatureMin"
      ? body.offsetHeight * 0.32
      : body.offsetHeight * 0.9;
  canvasInfo.value = { paintWidth, paintHeight };
  const options = {
    size: [paintWidth, paintHeight],
    penWidth: 4,
    penMode: "paint",
    penColor: "#333333",
    className: "signature__paint",
    interactiveMode: "touch",
    scaleTransition: false,
  };
  board.value = new DrawingBoard(`#${props.signatureIdName}`, options);

  // set bgm
  setCanvasBgm(PARNT_IMG.value);
  board.value.setPenModePaint();
  console.log(toRaw(board.value), "board.valueboard.value");
};
const setCanvasBgm = (url: any) => {
  /**
   * set canvas bgm
   */
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onerror = (error) => {
    console.log("加载失败", error);
  };

  xhr.onload = () => {
    console.log("加载状态", xhr.status);
    if (xhr.status === 200) {
      const image = new Image();
      image.src = URL.createObjectURL(xhr.response);
      image.crossOrigin = "anonymous";
      image.onload = () => {
        console.log("[paint]", "image loaded:", url);

        let { naturalWidth, naturalHeight } = image;
        board.value.setBgImg(image, naturalWidth, naturalHeight);
      };
    }
  };

  xhr.send();
};
const onConfimClick = async () => {
  /**
   * 确定
   * 检查绘制质量（比划数>3）
   * 获取绘制图片并上传
   */
  //  检查绘制质量
  let time;
  clearInterval(time);
  let paintCout = board.value.getPaintCount();
  if (paintCout <= 3) {
    // this.$toast.fail("监测到签名质量不过关，请删除后重新签字!");
    return;
  }
  // this.$emit("isClickText", true);
  let url = "";
  // let url = await this.uploadSignImg();
  if (url) {
    if (props.signatureType === "signatureMax") {
      // url = imageUtils.imageProcess(url, { rotate: 270 });
    }
    // $emit("onSignatueImg", url);
    // $emit("isShowBoard", false);
    time = setTimeout(() => {
      // $emit("isClickText", false);
    }, 2000);
  }
};
const uploadSignImg = async () => {
  /**
   * 上传签字 图片
   */
  // this.$toast.loading({
  //   duration: 0,
  //   message: "上传中...",
  //   forbidClick: true,
  // });
  // const file = await this.getBlob();
  // this.$notify({ type: "primary", message: "开始图片上传" });
  // this.$wxtCloud.setSceneName("intelligentform");
  // this.$wxtCloud.init("weixt-static", "cos");
  // let url = await this.$wxtCloud.uploadFileToCloud({ file: file }, {});
  // this.$toast.clear();
  // return url;
};
/**
 * 获取dataURL
 *
 * @param {IMG_TYPE} [type='png'] 图片类型
 * @param {number} [compressRate=1] 压缩比率
 * @returns dataURL
 * @memberof DrawingBoard
 */
const getDataUrl = (type = "jpeg", compressRate = 0.95) => {
  return board.value.getDataUrl(type, compressRate);
};

/**
 * 获取Blob
 *
 * @param {IMG_TYPE} [type='png'] 图片类型
 * @param {number} [compressRate=1] 压缩比率
 * @returns {Promise<Blob>} 返回blob
 * @memberof DrawingBoard
 */
const getBlob = (type = "jpeg", compressRate = 0.95) => {
  return Promise
    .resolve
    // fileUtils.dataUrlToBlob(this.getDataUrl(type, compressRate))
    ();
};

const onClearCanvasClick = () => {
  /**
   * 清空绘制
   */
  // change  status
  // currentPain = false; //未定义
  // clear
  board.value && board.value.clear();
};
onMounted(() => {
  !board.value &&
    nextTick(() => {
      init();
    });
});
defineExpose({ onConfimClick, onClearCanvasClick });
</script>

<style lang="less" scoped>
.canvas-board {
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    position: absolute;
    letter-spacing: 12px;
    color: #000000;
    font-size: 32px;
  }
}
.opacity-9 {
  opacity: 0.9;
}
.text-rotate {
  transform: rotate(90deg);
}
</style>
