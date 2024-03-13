<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@lazy-ui/utils'
import { omit, pick } from 'lodash-es'
import { originInputProps } from './interface.ts'
import type { InputProps } from './interface.ts'

defineOptions({
  name: 'LInput',
  inheritAttrs: false,
})
const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
defineSlots<{
  prefix(): any
  suffix(): any
}>()
const { cx, c, cm, ce } = useClassnames('input')
const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size!))]: !!props.size,
  }
})
const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})
function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (props.modelValue === target.value)
    return

  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}
const inputRef = ref<HTMLInputElement>()
function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue)
    return

  _input.value = props.modelValue ?? ''
}
onMounted(() => {
  setInputValue()
})
function focus() {
  inputRef.value?.focus()
}
function blur() {
  inputRef.value?.blur()
}
defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input v-bind="pick($attrs, originInputProps)" ref="inputRef" :class="inputCls" :disabled="disabled" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>
