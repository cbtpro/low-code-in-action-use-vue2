<template>
  <div class="demo">
    <assets
      v-model="assets"
      class="assets"
      @dragstart="dragstartHandle"
    />
    <editor
      ref="editorRef"
      v-model="data"
      class="editor"
    />
    <properties class="properites" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Assets from '@/components/Assets.vue'
import Editor from '@/components/Editor.vue'
import Properties from '@/components/Properties.vue'
import defaultData from '@/assets/datas/default.json';

export default {
  name: "demo",
  components: {
    Assets,
    Editor,
    Properties,
  },
  data() {
    return {
      data: defaultData,
    };
  },
  computed: {
    ...mapGetters('app', [
      'assets',
    ]),
    editorRef() {
      return this.$refs.editorRef
    },
  },
  created() {
  },
  methods: {
    dragstartHandle(e, asset) {
      console.log(e, asset)
      // console.log(this.editorRef.gridLayoutRef)
    },
  },
};
</script>

<style scoped>
.demo {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.assets {
  width: 30%;
  height: 100%;
}
.editor {
  width: 50%;
  height: 100%;
}
.properties {
  width: 20%;
  height: 100%;
}
</style>
