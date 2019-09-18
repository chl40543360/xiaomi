<template>
  <div class="navbar">
    <van-tabs v-model="active" background="#f2f2f2" title-active-color="#f76968" color="#f76968">
      <van-tab title="推荐">
        <Tuijian />
      </van-tab>
      <van-tab title="手机">
        <Shouji />
      </van-tab>
      <van-tab title="智能">
        <Zhineng />
      </van-tab>
      <van-tab title="电视">
        <Dianshi />
      </van-tab>
      <van-tab title="家电">
        <Jiadian />
      </van-tab>
      <van-tab title="笔记本">
        <Bijiben />
      </van-tab>
      <van-tab title="生活周边">
        <Liferound />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Tuijian from "./Tuijian";
import Shouji from './Shouji'
import Zhineng from './Zhineng'
import Dianshi from './Dianshi'
import Jiadian from './Jiadian'
import Bijiben from './Bijiben'
import Liferound from './Liferound'

export default {
  name: "navbar",
  data() {
    return {
      active: 0
    };
  },
  components: {
    Tuijian,
    Shouji,
    Zhineng,
    Dianshi,
    Jiadian,
    Bijiben,
    Liferound
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  
}
</style>
