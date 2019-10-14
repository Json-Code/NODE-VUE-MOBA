<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="w-100" src="../assets/images/8daa3e2de015c88c3c8ea34e75a163e2.jpeg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/fd82e1c23dfb6e34b61586c2054af9de.jpeg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/e8c1fe9d8836fe09f428a634e67cf62f.jpeg" alt="">
            </swiper-slide>
            <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
        </swiper>
        <!-- end of swiper  -->
        <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm">
                <i class="sprite sprite-arrow"></i>
                <span>更多</span>
            </div>
        </div>
         <!-- end of nav -->
        <m-card icon="Menu" title="新闻资讯">
            <div class="nav jc-between">
                <div class="nav-item active">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">热门</div>
                </div>
            </div>
            <div class="pt-3">
                <swiper>
                    <swiper-slide v-for="m in 5" :key="m">
                        <div class="py-2" v-for="n in 5" :key="n">
                            <span>[新闻]</span>
                            <span>|</span>
                            <span>10月12日抢先服不停机更新公告</span>
                            <span>06/02</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>            
        </m-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                //循环
                loop: true,
                //设定初始化时slide的索引
                initialSlide: 0,
                //自动播放
                autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                /* 触摸滑动后是否继续轮播 */
                disableOnInteraction: false
                },
                //滑动速度
                speed: 800,
                //滑动方向
                direction: "horizontal",
                //小手掌抓取滑动
                grabCursor: true,
                on: {
                //滑动之后回调函数
                slideChangeTransitionStart: function() {}
                },
                pagination: {
                    el: '.pagination-home'
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors, 'white');
        &.swiper-pagination-bullet-active {
            background: map-get($colors, 'info');
        }
    }
}
// end of swiper

.nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
        width: 25%;
        border-left: 1px solid $border-color;
        &:nth-child(4n+1) {
            border-left: none
        }
    }
}
</style>