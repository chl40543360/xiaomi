<template>
  <div class="nav">
    <van-tabbar v-model="active" active-color="#f76968" route="route">
      <van-tabbar-item name="home" icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="sort" icon="apps-o" to="/sort">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-circle-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
      route: true
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  margin: 6px 0;

  .van-tabbar-item {
    margin: 0 22px;
  }
}
</style>
