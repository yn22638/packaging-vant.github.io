<template>
  <div class="min-h-full popup-picker__demo">
    <div class="px-16px pt-24px">
      <p class="font-bold  text-18px popup-picker__title">popup-picker</p>
      <p class="pt-12px pb-16px text-13px leading-20px popup-picker__introduce ">介绍：主要采用 popup + picker
        封装出来的组件，好处就是以后用到直接引入这个，不必在写重复的
        popup + picker 了,接下来我们看效果
      </p>
    </div>
    <van-collapse v-model="activeNames" accordion @change="onClickChange">
      <van-collapse-item title="基础用法" name="1">
        <p>很普通的 popup + picker ，点击看效果</p>
        <van-button type="primary" size="mini" @click="onBasisClick">click</van-button>
      </van-collapse-item>

      <van-collapse-item title="popup 弹出方向" name="3">
        <p>大家根据按钮的文字提醒，点击查看效果</p>
        <van-button type="primary" size="mini" @click="onDirectionClick('top')">top click</van-button>
        <van-button type="success" size="mini" @click="onDirectionClick('bottom')">bottom click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 默认选中" name="2">
        <p>我们默认设置选中为 4，那么就是湖州，点击看效果</p>
        <van-button type="primary" size="mini" @click="onSelectIndexClick">click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 选择器的顶部栏方向" name="4">
        <p>默认在上面，下面点击可以体验效果</p>
        <van-button type="success" size="mini" @click="onPickerNavClick('top')">top click</van-button>
        <van-button type="primary" size="mini" @click="onPickerNavClick('bottom')">bottom click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 可见的选项个数" name="5">
        <p>每个 btn 按钮对应的数量就是 picker 显示的个数,快来试试效果吧</p>
        <van-button type="primary" size="mini" @click="onPickerCountClick(3)">three click</van-button>
        <van-button type="success" size="mini" @click="onPickerCountClick(7)">seven click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 多列选择" name="6">
        <p>点击查看 多列选择</p>
        <van-button type="primary" size="mini" @click="onColumnsClick">columns click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 动态设置选项" name="7" disabled>
        <p>点击查看 动态设置选项</p>
        <van-button type="primary" size="mini" @click="onDynamicClick">dynamic click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 级联选择" name="8">
        <p>点击查看 级联选择</p>
        <van-button type="primary" size="mini" @click="onCascadeClick">cascade click</van-button>
      </van-collapse-item>

      <van-collapse-item title="picker 自定义数据结构" name="9">
        <p>点击查看 自定义数据结构</p>
        <van-button type="primary" size="mini" @click="onCustomClick">custom click</van-button>
      </van-collapse-item>
    </van-collapse>

    <popup-picker :is-viable="isViable" :columns="columns" :position="position" :toolbar-position="toolbarPosition"
      :visible-item-count="visibleItemCount" :default-index="defaultIndex" :custom-field-name="customFieldName"
      @close="onClose" @change="onPickerChange" @confirm="onConfirmClick"></popup-picker>
  </div>
</template>

<script setup lang="ts">
import PopupPicker from "@/components/m-popup-picker/index.vue";
import type {
  PickerOption,
  PickerColumn,
} from 'vant';

const activeNames = ref('1')
const isViable = ref<boolean | undefined>(undefined)
const defaultIndex = ref<number | undefined>(undefined)
const columns = ref<PickerOption | PickerColumn | undefined>(undefined);
const position = ref<string | undefined>(undefined)
const toolbarPosition = ref<string | undefined>(undefined)
const visibleItemCount = ref<number | undefined>(undefined)
const customFieldName = ref<{ text: string, children: string } | undefined>(undefined)

// popup & picker
const onClose = () => {
  isViable.value = false
}

// picker
// change 监听
const onPickerChange = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  console.log(`您选择的是${currentValue}，当前索引${currentIndex}`);
  //  pickerRef.value.setColumnValues(1, cities[values[0]]);
}
// 确认
const onConfirmClick = (currentValue: PickerOption | PickerOption[], currentIndex: number | number[]) => {
  console.log(currentValue);

  if (Array.isArray(currentValue)) {
    let toastValue = ''
    for (const item of currentValue) {
      toastValue += (item as { text: string }).text || (item as { cityName: string }).cityName
    }
    Toast.success(`您选择的是：${toastValue}`)
  } else {
    Toast.success(`您选择的是：${currentValue}`)
  }
}
// collapse click
const onClickChange = (index: number) => {
  activeNames.value = `${index}`
}

// popup 方向
const onDirectionClick = (direction: string) => {
  init()
  position.value = direction
  isViable.value = true
}

// picker 基础用法
const onBasisClick = () => {
  init()
  isViable.value = true
}
// picker 默认选中
const onSelectIndexClick = () => {
  init()
  defaultIndex.value = 4
  isViable.value = true
}
// picker 顶部菜单栏
const onPickerNavClick = (value: string) => {
  init()
  toolbarPosition.value = value
  isViable.value = true
}
// picker 可见个数
const onPickerCountClick = (count: number) => {
  init()
  defaultIndex.value = 3
  visibleItemCount.value = count
  isViable.value = true
}
// picker 多列选择
const onColumnsClick = () => {
  init()
  columns.value = [
    // 第一列
    {
      values: ['周一', '周二', '周三', '周四', '周五'],
      defaultIndex: 2,
    },
    // 第二列
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ]
  isViable.value = true
}
// picker 动态
const onDynamicClick = () => {
  init()
  const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };
  columns.value = [
    { values: Object.keys(cities) },
    { values: cities['浙江'] },
  ];
  isViable.value = true
}
// picker 级联选择
const onCascadeClick = () => {
  init()
  columns.value = [
    {
      text: '浙江',
      children: [
        {
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }],
        },
        {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }],
        },
      ],
    },
    {
      text: '福建',
      children: [
        {
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }],
        },
        {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }],
        },
      ],
    },
  ]
  isViable.value = true
}
// picker 自定义数据
const onCustomClick = () => {
  init()
  customFieldName.value = {
    text: 'cityName',
    children: 'cities',
  }
  columns.value = [
    {
      cityName: '浙江',
      cities: [
        {
          cityName: '杭州',
          cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
        },
        {
          cityName: '温州',
          cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
        },
      ],
    },
    {
      cityName: '福建',
      cities: [
        {
          cityName: '福州',
          cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
        },
        {
          cityName: '厦门',
          cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
        },
      ],
    },
  ]
  isViable.value = true
}
const init = () => {
  defaultIndex.value = undefined
  position.value = undefined
  toolbarPosition.value = undefined
  isViable.value = undefined
  columns.value = undefined
  customFieldName.value = undefined
}

onMounted(() => {
  init()
})
</script>

<style lang="less" scoped>
.popup-picker {

  &__demo { 
    background-color: #f7f8fa;
  }

  &__title {
    color: #323233;
  }

  &__introduce {
    color: #c8c9cc;
  }
}
</style>
