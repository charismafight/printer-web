<script setup lang="ts">
import UploadButton from './components/UploadButton.vue'
import PrintButton from './components/PrintButton.vue'

</script>

<template>
  <header>
    <img alt="Taye" class="logo" src="@/assets/taye.jpg" width="100%" height="380px" />
  </header>
  <el-row>
    <el-col :span=12>
      <UploadButton></UploadButton>
    </el-col>
    <el-col :span=12>
      <PrintButton></PrintButton>
    </el-col>
  </el-row>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 200vh;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
