<template>
  <Layout>
    <section class="container">
      <router-view></router-view>
    </section>
  </Layout>
</template>

<script>
import { defineComponent } from "vue";
import { Layout } from "../components";

export default defineComponent({
  components: {
    Layout
  },
  setup() {}
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
