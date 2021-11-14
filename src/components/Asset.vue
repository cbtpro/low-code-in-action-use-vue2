<template>
  <div class="asset">
    <component :is="instance" />
  </div>
</template>

<script>
export default {
  name: 'asset',
  model: {
    prop: 'modelValue',
  },
  props: {
    modelValue: {
      type: Function,
    },
  },
  data() {
    return {
      instance: this.modelValue
    }
  },
  watch: {
    modelValue(value, oldValue) {
      if (value !== oldValue) {
        this.instance = value
      }
    },
  },
}
</script>

<style scoped>
.asset {
  cursor: move;
}
</style>