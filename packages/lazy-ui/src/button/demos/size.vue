<docs>
---
title: 按钮大小
---

通过size属性调整
</docs>

<script setup lang="ts">
function handleClick() {
  alert('handleClick')
}
</script>

<template>
  <div>
    <l-button size="small" @handle-click="handleClick">
      按钮2
    </l-button>
    <l-button size="default">
      按钮1
    </l-button>
    <l-button size="large">
      按钮3
    </l-button>
  </div>
</template>
