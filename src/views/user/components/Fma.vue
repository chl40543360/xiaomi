<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="F码购买"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
            <van-icon name="search" slot="right" @click="toSearch" />
        </van-nav-bar>

        <!-- 内容 -->
        <div class="box">
            <input
                type="text"
                placeholder="请输入任意产品的F码"
                v-model="code"
            />
            <div class="state">
                <p class="name">F码就是朋友特权</p>
                <p class="content">
                    F码是小米产品优先购买码，无需预约排队，直接购买热门商品。F =
                    Friend，它是为小米的好朋友提供的“友情特权”。部分商品的特权购买，无法保证7天内发货。
                </p>
                <p class="name">谁会有F码？</p>
                <div class="content">
                    <p>我们把F码发放给以下论坛资深用户：</p>
                    <p>1. 小米论坛的版主们、顾问团、资源组成员、同城会会长</p>
                    <p>
                        2.
                        MIUI论坛的版主们、荣誉开发组、资源组、主题创意组和粉丝站长组的成员
                    </p>
                </div>
            </div>
        </div>

        <!-- 按钮 -->
        <button :class="{ active: show }">提交</button>
    </div>
</template>

<script>
export default {
    name: "f-ma",
    data() {
        return {
            code: ""
            // show: false
        };
    },
    methods: {
        onClickLeft() {
            if (window.history.length > 1) {
                this.$router.back();
            } else {
                this.$router.push({ path: "/home" });
            }
        },
        toSearch() {
            this.$router.push({ path: "/search" });
        }
    },

    computed: {
        show() {
            if (this.code !== "") {
                return true;
            } else {
                return false;
            }
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

.container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f2f2f2;
    z-index: 2;

    .box {
        padding: 20px;
        background-color: #fff;

        input {
            width: 100% - 10;
            font-size: 12px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }

        .state {
            border-top: 1px solid #eee;
            padding-top: 20px;
            font-size: 10px;
            line-height: 20px;
            color: #666;

            .name {
                font-size: 12px;
                margin: 5px 0;
            }
        }
    }

    button {
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #ccc;
        padding: 15px 0;
        border: 0;

        &.active {
            background-color: #f76968;
            color: #fff;
        }
    }
}
</style>

