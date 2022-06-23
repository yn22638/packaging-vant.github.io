# MPopupPicker

**本次更新，封装 popup 与 picker，还有一些常用的属性与方法**

## 属性

| 参数     | 说明                     | 类型    | 默认值 |
| -------- | ------------------------ | ------- | ------ |
| isViable | 是否显示弹窗 PopupPicker | Boolean | false  |
|          |                          |         |        |
|          |                          |         |        |

- 下次待更新也是待完成部分

  - slots 内容
    ```
      // 自定义整个顶部栏的内容
      <template #toolbar></template>
      // 自定义标题内容
      <template #title></template>
      // 自定义确认按钮内容
      <template #confirm></template>
      // 自定义取消按钮内容
      <template #cancel></template>
      // 自定义选项内容
      <template #option></template>
      // 自定义选项上方内容
      <template #columns-top></template>
      // 自定义选项下方内容
      <template #columns-bottom></template>
    ```
  - 通过 ref 获取组件实例方法
    Vant 中的许多组件提供了实例方法，调用实例方法时，我们需要通过 ref 来注册组件引用信息，引用信息将会注册在父组件的$refs对象上。注册完成后，我们可以通过this.$refs.xxx 访问到对应的组件实例，并调用上面的实例方法

    ```
    // 通过 ref 属性将组件绑定到 refs.checkbox 上
    <van-checkbox v-model='checked' ref='checkbox'>
      复选框
    </van-checkbox>
    // 获取
    const checkbox = ref(null)
    checkbox.getValues()
    ```
