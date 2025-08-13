<template>
  <div
    class="flex flex-col items-center justify-center p-2 lg:p-10 lg:flex-row"
  >
    <div class="w-full h-full py-8 lg:py-2">
      <div
        class="flex flex-col overflow-hidden shadow-2xl rounded"
      >
        <div
          class="h-8 p-4 bg-gray-900 text-white flex items-center"
        >
          <div
            class="w-3 h-3 rounded-full ml-3 bg-red-400"
          ></div>
          <div
            class="w-3 h-3 rounded-full ml-2 bg-yellow-400"
          ></div>
          <div
            class="w-3 h-3 rounded-full ml-2 bg-green-400"
          ></div>
        </div>
        <img :src="image" class="w-full object-cover" />
      </div>
    </div>
    <div class="relative text-center p-2 w-full h-full lg:w-3/4 lg:p-8 lg:text-left">
      <slot name="title"></slot>
      <slot name="heading"></slot>
      <slot name="description"></slot>
      <slot name="cta"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BContentBrowser',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
