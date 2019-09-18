<template>
  <div class="cartbody">
    <div class="cart">
      <van-checkbox-group v-model="checkGoods">
        <van-row gutter="10" v-for="(item,index) in cartGoods" :key="index">
          <van-col span="3">
            <van-checkbox
              :name="item.goodsId"
              checked-color="#f76968"
              style="position: absolute; top: 50%;"
            ></van-checkbox>
          </van-col>
          <van-col span="6">
            <van-image :src="item.img" @click="toDetail" width="100%"></van-image>
          </van-col>
          <van-col span="12">
            <p class="name">{{item.goodsName}}</p>
            <p class="price">售价：{{item.price | formatPrice}} X {{item.num}}</p>
            <p class="price">{{item.conf}} {{item.color}}</p>
            <van-stepper
              v-model="item.num"
              @plus="add(item)"
              @minus="sub(item)"
              style="text-align: center"
            />
          </van-col>
          <van-col span="3">
            <van-icon name="delete" @click="del(item)" style="position: absolute; top: 50%;"></van-icon>
          </van-col>
        </van-row>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
      v-if="cartGoods.length>0"
    >
      <van-checkbox
        v-model="checked"
        checked-color="#f76968"
        style="margin-left: 5px; font-size: 12px"
      >全选</van-checkbox>
    </van-submit-bar>

    <div class="null" v-else>
      <router-link to="/">
        <span class="msg">购物车是空的</span>
        <span class="btn">去逛逛</span>
      </router-link>
    </div>
    <div class="likeImg">
      <img src="/images/cart/like.jpg" alt />
    </div>
    <div class="cartLike">
      <ul>
        <li class="likeGood" v-for="(item,index) in goodsList" :key="index">
          <p>
            <img :src="item.img" alt @click="toDetail" />
          </p>
          <p class="name">{{item.name}}</p>
          <p class="price">
            <span>￥</span>
            {{item.newPrice}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      // 猜你喜欢商品列表
      goodsList: [
        {
          name: "小米红外遥控器",
          img: "/images/cart/likegoods01.jpg",
          newPrice: 39,
          oldPrice: ""
        },
        {
          name: "小米无线车充",
          img: "/images/cart/likegoods02.jpg",
          newPrice: 169,
          oldPrice: ""
        },
        {
          name: "ZMI 苹果编织数据线",
          img: "/images/cart/likegoods03.jpg",
          newPrice: 49,
          oldPrice: ""
        },
        {
          name: "小米路由器Mesh",
          img: "/images/cart/likegoods04.jpg",
          newPrice: 999,
          oldPrice: ""
        },
        {
          name: "RedmiBook 14",
          img: "/images/cart/likegoods05.jpg",
          newPrice: 4899,
          oldPrice: ""
        },
        {
          name: "米家互联网空调",
          img: "/images/cart/likegoods06.jpg",
          newPrice: 2199,
          oldPrice: ""
        }
      ],

      //选择的商品ID
      checkGoods: [],

      //用户
      userId: ""
    };
  },
  computed: {
    ...mapState(["cartGoods"]),
    totalPrice() {
      let total = 0;
      this.cartGoods.forEach(item => {
        total +=
          this.checkGoods.indexOf(item.goodsId) !== -1
            ? item.price * item.num
            : 0;
      });
      return total;
    },

    // 全选/取消全选
    checked: {
      get() {
        let sel = true;
        if (this.checkGoods.length === this.cartGoods.length) {
          sel = true;
        } else {
          sel = false;
        }
        return sel;
      },
      set() {
        if (this.checkGoods.length !== this.cartGoods.length) {
          this.checkGoods = [];
          this.cartGoods.forEach(item => {
            this.checkGoods.push(item.goodsId);
          });
          return;
        } else {
          this.checkGoods = [];
        }
      }
    }
  },
  methods: {
    ...mapMutations(["addNum, subNum, delGoods, addSelGoodsList, getUser"]),

    toDetail() {
      this.$router.push("/detail");
    },
    add(item) {
      this.addNum(item);
    },
    sub(item) {
      this.subNum(item);
    },
    //从购物车删除商品
    del(item) {
      this.$dialog
        .confirm({
          message: "是否删除"
        })
        .then(() => {
          this.delGoods(item);
          for (var i = 0; i < this.checkGoods.length; i++) {
            if (this.checkGoods[i] === item.goodsId) {
              this.checkGoods.splice(i, 1);
              return;
            }
          }
        })
        .catch(() => {
          return;
        });
    },

    // 前往结算页面
    onSubmit() {
      if (sessionStorage.getItem("userId") === null) {
        this.$router.push("/login");
      } else {
        this.getUser(sessionStorage.getItem("userId")); 
        this.addSelGoodsList(this.checkGoods);

        if (this.checkGoods.length === 0) {
          this.$toast.fail("请选择商品");
          return;
        }
        this.$router.push("/clear");
      }
    }
  },
  created() {
    this.cartGoods.forEach(item => {
      this.checkGoods.push(item.goodsId);
    });
  },
  filters: {
    formatPrice(value) {
      return (value / 100).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.cartbody {
  // padding-bottom: 10px;
  .cart {
    .van-row {
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;
      position: relative;
    }
    p {
      margin: 5px 0;
      text-align: center;
    }
    .name {
      font-size: 14px;
    }
    .price {
      font-size: 12px;
      color: #666;
    }
  }
  .null {
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: #ebebeb;
    .msg {
      display: inline-block;
      height: 50px;
      margin-right: 10px;
      margin-top: 10px;
      line-height: 50px;
      padding-left: 60px;
      color: #999;
      font-size: 13px;

      background: url("/images/cart/cart.png") no-repeat 0;
      background-size: auto 100%;
    }
    .btn {
      border: 1px solid #999;
      font-size: 14px;
      padding: 5px 10px;
      color: #333;
    }
  }

  .likeImg {
    background-color: #fff;
    img {
      width: 100%;
      vertical-align: bottom;
    }
  }

  .cartLike::after {
    content: "";
    display: block;
    clear: both;
  }
  .cartLike {
    text-align: center;
    .likeGood {
      width: 50%;
      float: left;
      list-style: none;
      background-color: #fff;
      padding-bottom: 20px;
      p {
        margin: 2px 0;
        img {
          width: 100%;
          height: 100%;
        }
        &.name {
          color: #333;
        }
        &.price {
          color: #f76968;
          font-size: 18px;

          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>