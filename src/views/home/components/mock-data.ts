interface ModelInfo {
  name: string
  title: string
  label: string
}

const modelList: ModelInfo[] = [
  {
    name: 'PopupPicker',
    title: 'm-popup-picker',
    label: '基于 popup 与 picker 二次封装（支持选择时间，地区，天气，节日等）',
  },
  {
    name: 'Progress', // PopupForm
    title: 'm-progress',
    label: 'progress加载条',
  },
  {
    name: 'Chat',
    title: 'm-emotion',
    label: '使用Qq,表情符号编码,获取到对应的 表情.gif,类一个聊天框输入的模型',
  },
  {
    name: 'Loading',
    title: 'm-loading',
    label: '采用 overlay 与 loading 一起实现的页面加载，或局部加载',
  },
  {
    name: 'Rate', //
    title: 'm-rate',
    label: '手动封装rate评分组件，进入查看效果',
  },
  {
    name: 'Input',
    title: 'm-input',
    label:
      '通过原生 input 自带的一些属性与事件方法，进行二次封装，从而改变样式与产生不同的效果',
  },
  {
    name: '',
    title: 'dialog',
    label:
      '弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式',
  },
  {
    name: '',
    title: 'dropdown-menu',
    label: '向下弹出的菜单列表',
  },
  {
    name: '',
    title: 'popover',
    label: 'click弹出式的气泡菜单',
  },
  {
    name: '',
    title: 'progress',
    label: '进度条',
  },
  {
    name: '',
    title: 'swipe',
    label: ' 轮播图',
  },
  {
    name: '',
    title: 'tree-select',
    label: '左侧菜单分类选择右侧内容',
  },
  {
    name: '',
    title: 'nav-bar',
    label: '为页面提供导航功能，常用于页面顶部',
  },
  {
    name: '',
    title: 'address-list',
    label: '展示地址信息列表',
  },
  {
    name: '',
    title: 'card',
    label: '商品卡片，用于展示商品的图片、价格等信息  ',
  },
]
export { modelList }
