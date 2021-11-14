<template>
  <div>{{ output }}</div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    name: {
      type: String,
      default: () => 'World'
    },
  },
  data() {
    return {
    }
  },
  computed: {
    output() {
      return `Hello ${this.name}!`
    },
  },
}
</script>

<style scoped>
  div {
    color: red;
  }
</style>
