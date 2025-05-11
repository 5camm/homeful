<template>
  <div
    class="min-w-screen rounded-lg"
    :class="[backgroundColor]"
  >
    <div
      class="flex flex-row items-center w-full lg:flex-col-reverse lg:text-center"
    >
      <div
        class="w-1/2 text-white text-2xl font-hairline relative flex flex-col p-12"
      >
        <slot name="headline"></slot>
        <slot name="content"></slot>
        <div class="flex mt-4">
          <slot name="cta"></slot>
        </div>
      </div>
      <div
        class="w-2/3 mt-6"
      >
        <slot name="media" class="shadow-2xl rounded-lg"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BHeroCulture',
  props: {
    background: {
      type: String,
      default: 'none'
    }
  },
  setup(props) {
    const backgroundColor = computed(
      () => `bg-${props.background}`
    )

    return {
      backgroundColor
    }
  }
}
</script>

<style scoped lang="scss"></style>
