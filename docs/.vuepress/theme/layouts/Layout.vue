<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div class="custom-container warning">
        <p class="custom-container-title">WARNING</p>
        <p>当前正处于测试版文档！</p>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
</style>