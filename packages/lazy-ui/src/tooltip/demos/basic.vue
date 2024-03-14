<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">

</script>

<template>
  <div>
    <l-tooltip placement="top" content="测试内容">
      <span>111</span>
      <template #content>
        <span style="color:red">
          插槽测试内容
        </span>
      </template>
    </l-tooltip>
  </div>
</template>
