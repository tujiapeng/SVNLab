<template>
<button v-if="size === 'tiny'" :class="'border h-8 border-gray-300 hover:bg-gray-200 hover:border-gray-400 '+ getBorderShape(shape)">
  <slot></slot>
</button>

<button v-if="size === 'small'"
  :class="'px-3 py-2 border bg-gray-50 border-gray-200 hover:bg-gray-300 '+ getBorderShape(shape)">
  <slot></slot>
</button>

<button v-if="size === 'normal'" ref="ezbtn" :class="'text-lg border px-2 py-2 hover:border-gray-400 hover:bg-gray-100 '+ getBorderShape(shape)">
  <slot></slot>
</button>

<button v-if="size === 'big'" :class="'my-1 h-12 min-w-max px-3 border-2 border-gray-400 rounded-md text-normal hover:border-gray-400 hover:bg-gray-100 '+ getBorderShape(shape)">
  <slot></slot>
</button>
</template>
<script setup>
const btnProps = defineProps({
  size: {
    type: String,
    default: "normal"
  },
  shape: {
    type: String,
    default: "normal"
  }
})

function getBorderShape(shape) {
  if (shape.split(' ')[0]) {
    var extClass = shape.split(' ').slice(1)
  }
  switch (shape) {
    case (shape.match(/left*/) || {}).input:
      return "rounded-l-md " + extClass
    case (shape.match(/right*/) || {}).input:
      return "rounded-r-md " + extClass
    case (shape.match(/middle*/) || {}).input:
      return extClass
    default:
      return "rounded-md " + shape
  }
}
</script>

<style></style>
