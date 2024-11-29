<template>
  <el-upload :action="url" name="files">
    <el-button class="big-button" type="primary">文件上传</el-button>
  </el-upload>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const proxy = getCurrentInstance()?.proxy
const url = proxy?.$http.defaults.baseURL + 'Upload'
</script>
