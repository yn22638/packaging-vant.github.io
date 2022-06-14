<template>
  <div class="">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
        <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
        <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
      <van-swipe-item v-for='(item, index) in swiperList' :key="index">
        <img :src="item.url" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="btns">
      <van-button class="open-btn" type="success" @click="onOpenImagePreview">点击展开preview</van-button>
      <van-button class="" type="success" @click="isShowImgs = !isShowImgs">点击生成图片</van-button>
    </div>
    <!-- <van-image-preview v-model:show="show" :images="images" @change="onChange">
      <template #cover>第{{ index }}页</template>
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview> -->

    <div v-if="isShowEditPreview" class="edit-preview">
      <div v-for="(item, index) in gridList" :key="index" class="preview-item">
        <p>{{ item.title }}</p>
        <van-icon :name="item.icon" />
      </div>
    </div>

    <div style="marginTop: 16px" v-if="isShowImgs">
      <van-image round width="100px" height="100px" :src="`https://picsum.photos/10${index}`"
        :style="{ padding: '6px 10px' }" v-for="(item, index) in 8">
        <template #loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template #error>加载失败</template>
      </van-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagePreview } from 'vant';

const show = ref(false);
const isShowEditPreview = ref(false);
const isShowImgs = ref(false);
const index = ref(0);

const swiperList = ref([
  { url: 'https://t7.baidu.com/it/u=4254889666,2174977374&fm=193&f=GIF' },
  { url: 'https://t7.baidu.com/it/u=1500571650,3211010172&fm=193&f=GIF' },
  { url: 'https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF' },
  { url: 'https://t7.baidu.com/it/u=2763645735,2016465681&fm=193&f=GIF' },
  { url: 'https://t7.baidu.com/it/u=48006913,1459517342&fm=193&f=GIF' },
])
const gridList = ref([
  { title: '分享', icon: 'share-o' },
  { title: '添加', icon: 'plus' },
  { title: '下载', icon: 'down' },
  { title: '删除', icon: 'delete-o' },
])

const onOpenImagePreview = () => {
  isShowEditPreview.value = true
  ImagePreview({
    images: [
      'https://t7.baidu.com/it/u=48006913,1459517342&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=1500571650,3211010172&fm=193&f=GIF'
    ],
    startPosition: 0,
    closeable: true,
    onClose: () => isShowEditPreview.value = false,
  });
}
const onChange = (newIndex: number) => {
  index.value = newIndex;
};
</script>

<style lang="less" scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.my-swipe .van-swipe-item {
  height: 175px;

  img {
    width: 100%;
    height: 100%;
  }
}

.edit-preview {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;

  .preview-item {
    width: 25%;
    text-align: center;
    padding-bottom: 16px;
    color: #fff;

    p {
      margin-bottom: 8px;
    }
  }
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
