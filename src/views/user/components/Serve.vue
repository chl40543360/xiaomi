<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
            title="服务"
            left-arrow
            style="background: #f2f2f2"
            @click-left="onClickLeft"
        >
            <van-icon name="search" slot="right" @click="toSearch" />
        </van-nav-bar>
        <!-- 自助服务 -->
        <div class="box">
            <p class="title">自助服务</p>
            <van-row>
                <van-col span="6" v-for="(item, index) in icon" :key="index">
                    <van-image :src="item"></van-image>
                </van-col>
            </van-row>
        </div>

        <!-- 客服 -->
        <div class="box">
            <p class="kefu">
                7X24小时在线客服
            </p>

            <van-row>
                <van-col span="8" v-for="(item,index) in kefu" :key="index" class="content">
                    <van-image width="30px" height="30px" :src="item.img"></van-image>
                    <p class="name">{{ item.name }}</p>
                    <p class="tel">{{ item.tel }}</p>
                    <p class="time">{{ item.time }}</p>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "serve",
    data() {
        return {
            icon: [
                "/images/user/serve/icon01.png",
                "/images/user/serve/icon02.png",
                "/images/user/serve/icon03.png",
                "/images/user/serve/icon04.png",
                "/images/user/serve/icon05.jpg",
                "/images/user/serve/icon06.png",
                "/images/user/serve/icon07.png",
                "/images/user/serve/icon08.png"
            ],
            kefu: [
                {
                    img: "/images/user/serve/kefu02.png",
                    name: "商城热线",
                    tel: "400-100-5678",
                    time: "8:00 - 18:00"
                },
                {
                    img: "/images/user/serve/kefu03.png",
                    name: "金融热线",
                    tel: "400-100-3399",
                    time: "9:00 - 19:00"
                },
                {
                    img: "/images/user/serve/kefu04.png",
                    name: "小米移动",
                    tel: "400-922-3838",
                    time: "8:00 - 18:00"
                }
            ]
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
            this.$router.push("/search");
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
        padding: 0 10px;
        background-color: #fff;
        margin-bottom: 10px;
        .title {
            font-size: 12px;
            line-height: 30px;
            border-bottom: 1px solid #eee;
            color: #999;
        }

        .kefu {
            text-align: center;
            font-size: 12px;
            line-height: 30px;
            border-bottom: 1px solid #eee;
            color: #999;
            padding: 10px 0;
        }

        .content {
            font-size: 11px;
            text-align: center;
            margin: 10px 0;
            line-height: 20px;

            p.tel {
                color: #f76968;
            }

            p.time {
                color: #999;
            }
        }
    }
}
</style>

