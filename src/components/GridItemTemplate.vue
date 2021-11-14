<template>
  <component :is="instance" />
</template>

<script>
import { mapGetters } from 'vuex'
import AssetNotFound from './AssetNotFound.vue'

export default {
  name: 'grid-item-template',
  model: {
    prop: 'modelValue',
  },
  props: {
    modelValue: {
      type: String,
      default: () => 'blank-asset'
    },
  },
  data() {
    return {
      instanceName: this.modelValue,
    }
  },
  computed: {
    ...mapGetters('app', [
      'assets',
    ]),
    instance() {
      const { assets, instanceName } = this
      const asset = assets.find(item => item.name === instanceName)
      if (asset) {
        return asset.instance
      }
      return AssetNotFound
    },
  },
  watch: {
    modelValue(value, oldValue) {
      if (value !== oldValue) {
        this.instanceName = value
      }
    },
  },
}
</script>

<style>

</style>