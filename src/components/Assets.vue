<template>
  <div>
    <template v-for="(asset, index) in assets">
      <asset
        v-model="asset.instance"
        :key="index"
        draggable
        @dragstart.native="dragstartHandle($event, asset)"
      >
      </asset>
    </template>
  </div>
</template>

<script>
import Asset from './Asset.vue'

export default {
  name: 'assets',
  components: {
    Asset,
  },
  model: {
    prop: 'modelValue',
  },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      assets: this.modelValue,
    }
  },
  watch: {
    modelValue(value, oldValue) {
      if (value !== oldValue) {
        this.assets = value
      }
    }
  },
  methods: {
    dragstartHandle(e, asset) {
      this.$emit('dragstart', e, asset)
    }
  },
}
</script>

<style scoped>

</style>