<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="选择城市"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <!-- 选择城市 -->
        <van-index-bar>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </van-index-bar>
    </div>
</template>

<script>
export default {
    name: "mi-home",
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
    background-color: #f2f2f2;
    z-index: 2;
}
</style>

