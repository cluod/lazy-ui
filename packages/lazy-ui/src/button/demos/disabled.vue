<docs>
---
title: disabled 禁用按钮
---
</docs>

<script setup lang="ts">
function handleClick() {
  alert('handleClick')
}
</script>

<template>
  <div>
    <l-button disabled @click="handleClick">
      按钮1
    </l-button>
    <l-button type="dashed" disabled>
      按钮2
    </l-button>
    <l-button type="primary" disabled>
      按钮3
    </l-button>
  </div>
</template>
