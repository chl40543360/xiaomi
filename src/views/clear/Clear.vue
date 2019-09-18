<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="用户结算"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <!-- 收货人姓名地址 -->
        <div class="address" @click="showAddress = true">
            <van-row gutter="5">
                <van-col span="23">
                    <p class="name">
                        {{ consigneeInfo.name }} {{ consigneeInfo.tel }}
                    </p>
                    <p class="addr">
                        {{ consigneeInfo.address }}
                    </p>
                </van-col>
                <van-col span="1">
                    <van-icon name="arrow" class="arrow"></van-icon>
                </van-col>
            </van-row>
        </div>

        <!-- 商品列表 -->
        <div class="goods-list">
            <van-row
                gutter="10"
                v-for="(item, index) in selGoodsList"
                :key="index"
            >
                <van-col span="3">
                    <van-image :src="item.img"></van-image>
                </van-col>
                <van-col span="13" class="msg">
                    <p>
                        {{ item.goodsName }}
                    </p>
                    <p>{{ item.conf }} {{ item.color }}</p>
                </van-col>
                <van-col span="2">
                    <p>X{{ item.num }}</p>
                </van-col>
                <van-col span="6" class="price">
                    ￥{{ item.price | formatPrice }}
                </van-col>
            </van-row>
        </div>

        <!-- 去付款按钮 -->
        <van-submit-bar
            :price="total"
            button-text="去付款"
            @submit="onSubmit"
        />

        <!-- 选择收货方式 -->
        <van-radio-group v-model="radio" value="1">
            <van-radio
                v-for="(item, index) in payMethod"
                :key="index"
                :name="item.name"
                checked-color="#f76968"
                >{{ item.value }}</van-radio
            >
        </van-radio-group>

        <!-- 收货地址选择区域 -->
        <transition mode="out-in">
            <van-address-list
                v-model="chosenAddressId"
                :list="consigneeList"
                @add="onAdd"
                @edit="onEdit"
                v-if="showAddress"
                style="position: fixed;bottom: 0; top: 0; left: 0;right: 0;z-index: 100; background: #fff"
                @select="selAddr"
            />
        </transition>

        <!-- 新增收货地址 -->
        <transition>
            <van-address-edit
                :area-list="areaList"
                show-delete
                @save="onSave"
                @delete="onDelete"
                v-if="showAddEdit"
                style="position: fixed;bottom: 0; top: 0;left: 0;right: 0; z-index: 1000; background: #fff"
                :address-info="addressInfo"
                @cancel-delete="cancel"
            />
        </transition>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import area from "@/assets/js/area.js";
export default {
    name: "clear",
    data() {
        return {
            chosenAddressId: "1",
            payMethod: [
                {
                    name: "1",
                    value: "微信支付"
                },
                {
                    name: "2",
                    value: "支付宝支付"
                },
                {
                    name: "3",
                    value: "小米钱包"
                },
                {
                    name: "4",
                    value: "银联支付"
                }
            ],
            showAddress: false, // 是否显示选择收货地址,
            radio: "1",
            areaList: area, // 所有的省市区
            showAddEdit: false, // 是否显示地址编辑
            addressInfo: {}
        };
    },
    methods: {
        ...mapMutations(["setConsInfo", "delSelGoods", "addOrderList"]),

        // 返回上一页
        onClickLeft() {
            if (window.history.length > 1) {
                this.$router.back();
            } else {
                this.$router.push({ path: "/" });
            }
        },

        // 增加收货地址
        onAdd() {
            this.addressInfo = {};
            this.showAddEdit = true;
        },

        // 编辑地址
        onEdit(data) {
            this.addressInfo = data;
            this.showAddEdit = true;
        },

        // 选中收货地址
        selAddr(data) {
            this.setConsInfo(data);
            this.showAddress = false;
        },

        // 去付款
        onSubmit() {
            this.$toast.success("付款成功!");
            this.delSelGoods();
            this.addOrderList();
            this.$router.push("/");
        },

        // 保存地址
        onSave(data) {
            for (let i = 0; i < this.consigneeList.length; i++) {
                if (data.id === this.consigneeList[i].id) {
                    this.consigneeList[i].name = data.name;
                    this.consigneeList[i].tel = data.tel;
                    this.consigneeList[i].address =
                        data.province +
                        data.city +
                        data.county +
                        data.addressDetail;
                    this.showAddEdit = false;
                    return;
                }
            }

            let obj = {};
            obj.id = data.areaCode;
            obj.name = data.name;
            obj.tel = data.tel;
            obj.address =
                data.province + data.city + data.county + data.addressDetail;

            this.consigneeList.push(obj);
            this.showAddEdit = false;
        },

        // 删除地址
        onDelete(data) {
            for (let i = 0; i < this.consigneeList.length; i++) {
                if (data.id === this.consigneeList[i].id) {
                    this.consigneeList.splice(i, 1);
                }
            }
            this.showAddEdit = false;
        },

        cancel() {
            this.showAddEdit = false;
        }
    },
    computed: {
        ...mapState(["consigneeInfo", "selGoodsList", "consigneeList"]),

        // 自动计算总价
        total() {
            let all = 0;
            this.selGoodsList.forEach(item => {
                all += item.num * item.price;
            });
            return all;
        }
    },
    filters: {
        // 格式化价格
        formatPrice(value) {
            return (value / 100).toFixed(2);
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 50px;
}

.van-nav-bar__title {
    color: #999;
}
.van-icon {
    color: #999;
    font-size: 20px;
}

.address {
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .name {
        line-height: 30px;
        font-weight: bold;
    }
    .addr {
        font-size: 12px;
        color: #999;
    }
    .arrow {
        line-height: 45px;
    }
}

// 商品列表
.goods-list {
    background-color: #fff;
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 12px;

    .van-row {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
        line-height: 50px;
    }

    .msg {
        line-height: 25px;
    }
    .price {
        font-weight: bold;
    }
}

// 支付方式
.van-radio-group {
    background-color: #fff;
    padding: 0 10px;
    border: 1px solid #ddd;

    .van-radio {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }
}

.v-enter,
.v-leave-to {
    transform: translateY(100%);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}
</style>

