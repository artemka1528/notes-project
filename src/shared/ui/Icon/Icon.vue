<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

interface Props {
  name: string
  width?: number | string
  height?: number | string
  size?: number | string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
})

const currentIcon = defineAsyncComponent(() =>
    import(`./icons/${props.name}.vue`)
)
</script>


<template>
    <component :is="currentIcon" @click="$emit('click', $event)" :class="className" />
</template>
