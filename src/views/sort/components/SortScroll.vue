<template>
  <div class="sortscroll">
    <div class="menu-box" ref="menuBox">
      <ul>
        <li
          class="menu-list"
          ref="menuList"
          :class="{current: currentIndex === index}"
          v-for="(item,index) in goodsList"
          :key="index"
          @click="selectMenu(index,$event)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="goods-box" ref="goodsBox">
      <ul>
        <li
          class="goods-list goods-list-hook"
          ref="goodsList"
          v-for="(item,i) in goodsList"
          :key="i"
        >
          <p class="title">—— {{item.name}} ——</p>
          <van-row>
            <van-col span="8" v-for="(good,i) in item.goods" :key="i">
              <van-image :src="good.img" width="50px" height="50px" @click="todetail(good.id)"></van-image>
              <p class="goodName">{{good.name}}</p>
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import axios from "axios";

export default {
  data() {
    return {
      goodsList: [],
      listHeight: [],
      scrollY: 0
      //   clickEvent: false
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }

      return 0;
    }
  },
  created() {
    axios.get("/mock/data.json").then(res => {
      const data = res.data;
      this.goodsList = data;
      this.$nextTick(() => {
        this._initScroll();
        this._getHeight();
      });
    });
  },
  methods: {
    // 初始化左右滑动
    _initScroll() {
      this.meunScroll = new BetterScroll(this.$refs.menuBox, {
        click: true
      });

      this.goodsScroll = new BetterScroll(this.$refs.goodsBox, {
        click: true,
        probeType: 3
      });

      this.goodsScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _getHeight() {
      let goodsItems = this.$refs.goodsList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < goodsItems.length; i++) {
        let item = goodsItems[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _followScroll(index) {
      let menuList = this.$refs.menuList;
      let el = menuList[index];
      this.meunScroll.scrollToElement(el, 300, 0, -100);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    selectMenu(index, event) {
      // this.clickEvent=true;
      if (!event._constructed) {
        return;
      } else {
        let goodsItems = this.$refs.goodsList;
        let el = goodsItems[index];
        this.goodsScroll.scrollToElement(el, 300);
      }
    },
    todetail(params){
        this.$router.push({path:'detail',query:{id:params}})
    }
  }
};
</script>

<style lang="scss" scoped>
.sortscroll {
  display: flex;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 46px;
  bottom: 50px;
  overflow: hidden;
  .menu-box {
    flex: 3;
    .menu-list {
      font-size: 12px;
      height: 40px;
      line-height: 40px;
      background-color: #f0f0f0;
      &.current {
        color: $micolor;
        background-color: #fff;
        font-weight: bold;
        font-size: 13px;
        z-index: 10;
      }
    }
  }

  .goods-box {
    flex: 8;
    .goods-list {
      margin: 20px 0;
      .title {
        font-size: 14px;
        margin-bottom: 6px;
        color: #333;
      }
      .goodName {
        font-size: 10px;
        // white-space: nowrap;
        margin-bottom: 5px;
        color: rgb(126, 126, 126);
      }
    }
  }
}
</style>