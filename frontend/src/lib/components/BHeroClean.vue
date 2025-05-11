<template>
  <div
    class="flex flex-row items-center justify-center min-w-full"
    :class="[backgroundColor]"
  >
    <div
      class="flex justify-center w-2/3 md:w-3/4 lg:w-2/3"
    >
      <slot name="media" class="w-full"> </slot>
    </div>
    <div
      class="container relative flex flex-col w-full text-2xl text-gray-700 lg:w-3/4 sm:px-0 md:px-10 sm:items-center lg:mb-0"
    >
      <slot name="headline"> </slot>
      <slot name="content"> </slot>
      <div class="relative flex">
        <slot name="cta"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BHeroClean',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'white'
    }
  },
  setup(props) {
    const isReversed = computed(() => props.reverse)
    const backgroundColor = computed(
      () => `bg-${props.background}`
    )

    return {
      isReversed,
      backgroundColor
    }
  }
}
</script>

<style scoped lang="scss"></style>
