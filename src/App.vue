<template>
  <!--
    当屏幕尺寸小于600px时，应用下面的CSS样式 max-width: 600px
    当屏幕尺寸大于900px时，应用下面的CSS样式 min-width: 900px
    sm	640像素	@media (min-width: 640px) { ... }
    md	768像素	@media (min-width: 768px) { ... }
    lg	1024像素	@media (min-width: 1024px) { ... }
    xl	1280像素	@media (min-width: 1280px) { ... }
    2xl	1536像素	@media (min-width: 1536px) { ... }
  -->
  <comment-con></comment-con>
</template>

<script setup>
import CommentCon from "./components/CommentCon.vue";
</script>

<style></style>
