<template>
  <div>{{output}}</div>
</template>

<script>
export default {
  name: 'see-you-late',
  props: {
    name: {
      type: String,
      default: () => 'world'
    },
  },
  data() {
    return {
    }
  },
  computed: {
    output() {
      return `see you late, ${this.name}!`
    },
  },
}
</script>

<style>

</style>