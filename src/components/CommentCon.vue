<!-- 整体的留言系统组件 -->
<template>
  <main class="p-8 bg-gray-50 min-h-screen">
    <div class="max-w-screen-xl mx-auto bg-white p-4 rounded-lg shadow-2xl">
      <div class="text-base my-2 italic font-medium tracking-widest">评论</div>
      <!-- 评论框 -->
      <comment-box></comment-box>
      <!-- 分割线 -->
      <divider-horizontal></divider-horizontal>
      <div v-for="comment in comments" :key="comment.id">
        <!-- 单个留言 -->
        <comment-item
          :user="comment.user"
          :avatar="comment.avatar"
          :time="comment.time"
          :content="comment.content"
        >
        </comment-item>
        <!-- 回复列表容器 -->
        <reply-con v-if="comment.replies">
          <comment-item
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"
          >
          </comment-item>
        </reply-con>
        <reply-box></reply-box>
      </div>
    </div>
  </main>
</template>

<script setup>
import CommentBox from "./CommentBox.vue";
import DividerHorizontal from "./DividerHorizontal.vue";
import CommentItem from "./CommentItem.vue";
import ReplyCon from "./ReplyCon.vue";
import ReplyBox from "./ReplyBox.vue";
import comments from "../data/comments";
</script>

<style></style>
