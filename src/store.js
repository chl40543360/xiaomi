import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //搜索关键词
        searchKey: "",

        //购物车商品列表
        cartGoods: [],

        //购物车被选中的商品列表
        selGoodsList: [],


        //用户信息
        user: [{
            userId: "",
        }],

        //收货人信息列表
        consigneeList: [
            {
                id: "1",
                name: "小陈",
                tel: "17812345678",
                address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 520 室"
            },
            {
                id: "2",
                name: "大志",
                tel: "18944667899",
                address: "浙江省杭州市拱墅区莫干山路 50 号"
            }
        ],
        //选中的收货人信息
        consigneeInfo: {
            id: "1",
            name: "小陈",
            tel: "17812345678",
            address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 520 室"
        },

        //订单列表
        orderList: [],
    },

    mutations: {
        //获取用户信息
        getUser(state, data) {
            console.log(data)
        },

        //同步搜索关键词
        setSearchKey(state, key) {
            state.searchKey = key
        },

        //购物车商品数量加一
        addNum(state, data) {
            state.cartGoods.forEach((item) => {
                if (item.goodsId === data.goodsId) {
                    item.num += 1;
                }
            })
        },

        //购物车商品数量减一
        subNum(state, data) {
            state.cartGoods.forEach((item) => {
                if (item.goodsId === data.goodsId) {
                    item.num -= 1;
                }
            })
        },

        //在购物车中删除商品
        delGoods(state, data) {
            for (let i = 0; i < state.cartGoods.length; i++) {
                if (state.cartGoods[i].goodsId === data.goodsId) {
                    state.cartGoods.splice(i, 1);
                }
            }
        },

        //添加商品到购物车
        addGoods(state, data) {
            for (let i = 0; i < state.cartGoods.length; i++) {
                if (state.cartGoods[i].goodsId === data.goodsId) {
                    state.cartGoods[i].num += data.num;
                    return;
                }
            }
            state.cartGoods.push(data);
        },

        //设置收货人信息
        setConsInfo(state, data) {
            state.consigneeInfo = data;
        },

        // 将 选中的商品 添加到 被选中商品列表 中
        addSelGoodsList(state, data) {
            state.selGoodsList = [];
            data.forEach(item => {
                state.cartGoods.forEach(i => {
                    if (item === i.goodsId) {
                        state.selGoodsList.push(i);
                    }
                })
            })
        },

        // 将付款的商品加入到商品列表中
        addOrderList(state) {
            let obj = {};
            obj.time = new Date();
            obj.goodsList = state.selGoodsList;
            state.orderList.unshift(obj);
        },

        // 从商品列表中删除已付款的商品
        delSelGoods(state) {
            state.selGoodsList.forEach(item => {
                for (let i = 0; i < state.cartGoods.length; i++) {
                    if (item.goodsId === state.cartGoods[i].goodsId) {
                        state.cartGoods.splice(i, 1);
                    }
                }
            })
        },

    },

    actions: {

    }
})


