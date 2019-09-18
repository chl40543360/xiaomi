<template>
  <div class="detail">
    <DetailSwiper />
    <DetailMessage />
    <DetailSelect />
  </div>
</template>

<script>
import DetailSwiper from "./components/DetailSwiper";
import DetailMessage from "./components/DetailMessage";
import DetailSelect from './components/DetailSelect'

export default {
  data() {
    return {};
  },
  components: {
    DetailSwiper,
    DetailMessage,
    DetailSelect
  }
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: #f6f6f6;
}
</style>