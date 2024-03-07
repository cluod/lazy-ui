<script setup lang="ts">
import { useClassnames } from '../gen-class'

const { c, ce, cm } = useClassnames('button')
</script>

<template>
  <div :class="c('primary')">
    {{ c('a', 'b', cm('primary')) }}{{ ce('primary') }}
    <button>
      按钮
    </button>
  </div>
</template>
