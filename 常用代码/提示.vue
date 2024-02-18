<template>
  <div></div>
</template>

<script setup>
import { ElMessage } from "element-plus";
function fun() {
  ElMessage({
    message: "修改资料成功",
    type: "success",//
  });
}
const open1 = () => {
  ElMessage('普通消息，灰色')
}
const open2 = () => {
  ElMessage({
    message: '成功消息，绿色',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: '警告消息，黄色',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('错误消息，红色')
}
</script>

<style lang="scss" scoped>
</style>