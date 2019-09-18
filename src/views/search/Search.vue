<template>
  <div class="search">
    <SearchHeader />
    <SearchBody />
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader";
import SearchBody from "./SearchBody";

export default {
  data() {
    return {};
  },
  components: {
    SearchHeader,
    SearchBody
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  .sheader {
    line-height: 54px;
    .arrow-left {
      font-size: 26px;
      font-weight: bold;
      margin-left: 10px;
      display: inline-block;
      color: rgb(199, 198, 198);
      line-height: 54px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>