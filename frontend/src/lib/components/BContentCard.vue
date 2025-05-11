<template>
  <div
    class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
  >
    <div
      :class="[backgroundColor]"
      class="flex flex-col max-w-screen-lg justify-around overflow-hidden rounded-lg shadow-2xl lg:flex-row-reverse sm:mx-auto"
    >
      <div v-if="image" class="relative p-8 lg:w-1/2">
        <img
          :src="image"
          alt=""
          class="object-contain w-full h-full"
        />
      </div>
      <div
        class="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2"
      >
        <div>
          <slot name="title"></slot>
        </div>
        <slot name="heading"></slot>
        <slot name="description"></slot>
        <div class="flex items-center">
          <slot name="cta"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
console.log(computed)

export default {
  name: 'BContentCard',
  props: {
    image: {
      type: String
    },
    background: {
      type: String,
      default: 'white'
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
