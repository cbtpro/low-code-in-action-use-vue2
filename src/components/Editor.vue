<template>
  <div>
    <grid-layout
      ref="gridLayoutRef"
      :layout="layout"
      :col-num="375"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(item, index) in layout"
        :key="index"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <grid-item-template v-model="item.instanceName" />
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import GridItemTemplate from './GridItemTemplate.vue'
const {
  GridLayout,
  GridItem,
} = VueGridLayout

export default {
  name: 'editor',
  components: {
    GridLayout,
    GridItem,
    GridItemTemplate,
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: this.modelValue,
    }
  },
  computed: {
    gridLayoutRef() {
      return this.$refs.gridLayoutRef
    },
    layout() {
      return this.data.layout
    },
  },
  watch: {
    modelValue(value, oldValue) {
      if (value !== oldValue) {
        this.data = value
      }
    },
  },
}
</script>

<style scoped>

</style>