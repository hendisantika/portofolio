<template>
  <div class="work-card-container" @click="onClickFunction(content)">
    <img
      :alt="image.alt"
      :class="image?.maxWidth"
      :height="image.height"
      :src="image.src"
      :width="image.width"
      loading="lazy"
    />
  </div>
</template>
<script>
export default defineComponent({
  props: {
    image: {
      type: Object,
      default: () => {
      }
    },
    bgColor: {
      type: String,
      default: "bg-white"
    },
    onClickFunction: {
      type: Function,
      default: () => {
        return "Default function";
      }
    },
    content: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
</script>
