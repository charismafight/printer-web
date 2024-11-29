<template>
  <div>
    <el-upload :action="url" name="files">
      <el-button class="big-button" type="warning">文件打印</el-button>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const proxy = getCurrentInstance()?.proxy
const url = proxy?.$http.defaults.baseURL + 'Print'
</script>
