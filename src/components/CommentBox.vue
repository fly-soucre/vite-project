<!-- 留言表单容器组件 -->
<template>
  <form action="" class="grid p-2">
    <textarea
      name="comment"
      placeholder="请输入你的评论"
      class="h-24 bg-gray-50 p-2 rounded outline-none resize-none rounded antialiased placeholder-gray-800 cursor-pointer"
    ></textarea>
    <fieldset class="py-4">
      <input
        type="submit"
        value="评论"
        class="px-4 py-1 bg-blue-600 rounded text-white"
      />
      <input
        type="reset"
        value="取消"
        class="px-4 py-1 bg-white rounded border ml-3"
      />
    </fieldset>
  </form>
</template>

<script setup></script>

<style>
</style>
