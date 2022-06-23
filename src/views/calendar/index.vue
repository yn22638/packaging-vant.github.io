<template>
  <div class="">
    <div>
      {{ "单个日期时间是：" + oneCalendar }}
      <br>
      <van-button type="primary" @click="isShowOneCalendar = true">选择单个日期</van-button>
      <van-calendar :show="isShowOneCalendar" @confirm="onOneCalendarConfirm" />
    </div>

    <div>
      {{ "选择多个时间分别是：" + calendars }}
      <br>
      <van-button type="primary" @click="isShowCalendars = true">选择多个日期</van-button>
      <van-calendar :show="isShowCalendars" type="multiple" @confirm="onCalendarsConfirm" />
    </div>


  </div>
</template>

<script setup lang="ts">
import moment from "moment";
const isShowOneCalendar = ref(false)
const isShowCalendars = ref(false)
const oneCalendar = ref('')
const calendars = ref('')

// 单个
const onOneCalendarConfirm = (e: any) => {
  isShowOneCalendar.value = false
  oneCalendar.value = moment(e).format('YYYY-MM-DD')
}
// 多个
const onCalendarsConfirm = (calendars: any) => {
  isShowCalendars.value = false
  const dates = calendars.map((item: string) => moment(item).format('YYYY-MM-DD')).join()
  calendars.value = dates
  // 输出变了但是上面没有变
  console.log(calendars.value, '11111');

}
</script>

<style lang="less" scoped>
</style>
