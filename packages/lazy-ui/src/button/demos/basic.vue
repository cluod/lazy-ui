<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
function handleClick() {
  alert('handleClick')
}
</script>

<template>
  <div>
    <l-button @click="handleClick">
      按钮1
    </l-button>
    <l-button type="dashed">
      按钮2
    </l-button>
    <l-button type="primary">
      按钮3
    </l-button>
  </div>
</template>
