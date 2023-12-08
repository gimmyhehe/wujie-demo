<template>
  <div style="height: 100%; width: 100%">
    <WujieVue class="item" name="vue3" :url="vue3Url" :sync="true" :plugins="[{ jsBeforeLoaders: [{ content: 'window.tinyGetRealWindow = () => window.parent' }] }]"></WujieVue>
  </div>
</template>

<script>
import hostMap from "../../wujie-config/hostMap";

export default {
  data() {
    return {
      vue3Url: hostMap("//localhost:8082/"),
    };
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped>
.item {
  display: inline-block;
  border: 1px dashed #ccc;
  border-radius: 8px;
  width: 45%;
  height: 45%;
  margin: 20px;
  overflow: scroll;
}
</style>
