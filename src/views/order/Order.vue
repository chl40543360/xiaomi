<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="我的订单"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
            <van-icon name="search" slot="right" @click="toSearch" />
        </van-nav-bar>

        <!-- 订单列表 -->
        <div class="box" v-for="(item, index) in orderList" :key="index">
            <p class="date">
                订单日期: {{ item.time | formatTime }} <span>已付款</span>
            </p>
            <p class="serial-num">订单编号: {{ item.time | formatSerial }}</p>
            <div class="goods-list">
                <van-row
                    gutter="5"
                    v-for="(goods, i) in item.goodsList"
                    :key="i"
                >
                    <van-col span="4">
                        <van-image :src="goods.img"></van-image>
                    </van-col>
                    <van-col span="17">
                        <p>
                            {{ goods.goodsName }} {{ goods.conf }}
                            {{ goods.color }}
                        </p>
                    </van-col>
                    <van-col span="3"> X{{ goods.num }} </van-col>
                </van-row>
            </div>
            <p class="total">
                共 {{ item.goodsList | formatNum }} 件商品 实付金额:
                {{ item.goodsList | formatPrice }} 元
            </p>
        </div>
        
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "order",
    methods: {
        onClickLeft() {
            if (window.history.length > 1) {
                this.$router.back();
            } else {
                this.$router.push({ path: "/" });
            }
        },

        toSearch() {
            this.$router.push("/search");
        }
    },
    computed: {
        ...mapState(["selGoodsList", "orderList"])
    },
    filters: {
        formatTime(value) {
            let year = value.getFullYear();
            let month = value.getMonth() + 1;
            let day = value.getDate();
            let hour = value.getHours();
            let minute = value.getMinutes();
            return year + "/" + month + "/" + day + " " + hour + ":" + minute;
        },
        formatNum(value) {
            let num = 0;
            value.forEach(item => {
                num += item.num;
            });
            return num;
        },
        formatPrice(value) {
            let price = 0;
            value.forEach(item => {
                price += item.price * item.num;
            });
            return (price / 100).toFixed(2);
        },
        formatSerial(value) {
            let year = value.getFullYear().toString();
            let month =
                parseInt((value.getMonth() + 1) / 10).toString() +
                ((value.getMonth() + 1) % 10).toString();
            let day =
                parseInt(value.getDate() / 10).toString() +
                (value.getDate() % 10).toString();

            let hour =
                parseInt(value.getHours() / 10).toString() +
                (value.getHours() % 10).toString();
            let minute =
                parseInt(value.getMinutes() / 10).toString() +
                (value.getMinutes() % 10).toString();

            let code = parseInt(Math.random() * 1000000);

            return year + month + day + hour + minute + code;
        }
    }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
    color: #999;
}
.van-icon {
    color: #999;
    font-size: 20px;
}

.box {
    background-color: #fff;
    padding: 20px;
    line-height: 20px;
    color: #333;
    margin-bottom: 10px;
    span {
        float: right;
        color: #f76968;
    }
    p.date {
        font-size: 14px;
    }
    p.serial-num {
        font-size: 10px;
        color: #999;
    }
    .goods-list {
        padding: 10px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        font-size: 12px;
        line-height: 35px;
    }
    p.total {
        text-align: right;
        font-size: 12px;
        line-height: 30px;
    }
}
</style>

