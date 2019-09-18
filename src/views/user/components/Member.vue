<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="会员中心"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <!-- 内容 -->
        <div class="box">
            <p class="msg">请前往大米商城App查看会员福利</p>

            <a href="http://s1.mi.com/m/appdownload/?mfull_ad&enter=1"
                >立即下载大米商城App</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "member",
    methods: {
        onClickLeft() {
            if (window.history.length > 1) {
                this.$router.back();
            } else {
                this.$router.push({ path: "/" });
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
    background-color: #fff;
    z-index: 2;

    .box {
        padding: 50px 20px;
        text-align: center;
        font-size: 14px;

        .msg {
            margin-bottom: 30px;
        }

        a {
            display: block;
            border: none;
            padding: 10px 0;
            background-color: #f76968;
            color: #fff;
        }
    }
}
</style>

