<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const value = ref('')
const inputRef = ref()
onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <div>
    <l-input ref="inputRef" v-model="value" test autocomplete size="large" />
    <l-input v-model="value">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </l-input>
    <l-input v-model="value" size="small" />
  </div>
</template>
