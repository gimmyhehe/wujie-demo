<template>
    <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from '@/components/TinyPager.vue'
console.log(666)
export default {
  data() {
    return {
      open: window.open
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
:root {
  --host-color: #f16b5f;
}
</style>
