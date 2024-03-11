<script lang="ts">
import { defineComponent } from 'vue'
import { useClassnames } from '@lazy-ui/utils'

export default defineComponent({
  name: 'LButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: 'default',
    },

  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    const { c, cx, cm } = useClassnames('button')
    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return {
      handleClick,
      cls,
    }
  },
})
</script>

<template>
  <!-- <div> -->
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
  <!-- </div> -->
</template>
