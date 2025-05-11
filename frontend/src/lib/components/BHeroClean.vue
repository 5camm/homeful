<template>
  <div
    class="flex flex-row flex-reverse items-center justify-around min-h-screen  min-w-screen"
    :class="[backgroundColor]"
  >
    <div
      class="flex items-center justify-center p-2 mx-auto w-full"
    >
      <slot name="media" class="w-full md:w-2/3 lg:w-1/2"> </slot>
    </div>
    <div
      class="container relative flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0"
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
