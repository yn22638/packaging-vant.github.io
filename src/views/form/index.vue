<template>
  <div class="h-screen bg-999 w-full py-20px overflow-auto">
    <van-form @failed="onFailed">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field v-model="form.value1" name="pattern" placeholder="正则校验" :rules="[{ pattern, message: '请输入正确内容' }]" />
        <!-- 通过 validator 进行函数校验 -->
        <!-- <van-field v-model="form.value2" name="validator" placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]" /> -->
        <!-- 通过 validator 返回错误提示 -->
        <!-- <van-field v-model="form.value3" name="validatorMessage" placeholder="校验函数返回错误提示"
          :rules="[{ validator: validatorMessage }]" /> -->
        <!-- 通过 validator 进行异步函数校验 -->
        <!-- <van-field v-model="form.value4" name="asyncValidator" placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]" /> -->
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="form.isSelect" size="20" />
          </template>
        </van-field>
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="form.isChecked" shape="square" />
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="form.GroupChecked" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="stepper" label="步进器">
          <template #input>
            <van-stepper v-model="form.stepperValue" />
          </template>
        </van-field>
        <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="form.rateValue" />
          </template>
        </van-field>
        <van-field name="slider" label="滑块">
          <template #input>
            <van-slider v-model="form.sliderValue" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" @click="onSubmit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  value1: '',
  value2: '',
  value3: '',
  value4: '',
  isSelect: false,
  isChecked: false,
  GroupChecked: [],
  stepperValue: '',
  rateValue: 4,
  sliderValue: 20
})
const pattern = /\d{6}/;
const onSubmit = () => {
  console.log(form.value);
}

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val: string) => /1\d{10}/.test(val);

// 校验函数可以直接返回一段错误提示
const validatorMessage = (val: any) => `${val} 不合法，请重新输入`;

// 校验函数可以返回 Promise，实现异步校验
const asyncValidator = (val: string) =>
  new Promise((resolve) => {
    Toast.loading('验证中...');

    setTimeout(() => {
      Toast.clear();
      resolve(val === '1234');
    }, 1000);
  });

const onFailed = (errorInfo: any) => {
  console.log('failed', errorInfo);
};
</script>

<style lang="less" scoped>
</style>
