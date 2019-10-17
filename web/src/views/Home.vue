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
        <!-- 新闻列表 -->
        <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
			<!-- #xxx指定name为xxx的插槽  =“{XXXXXX}”获取到插槽里面的XXXXXX的数据 -->
			<template #items="{category}">
				<router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
					<span class="px-2 text-info">[{{news.categoryName}}]</span>
					<span>|</span>
					<span class="flex-1 text-drak text-ellipsis pr-2">{{news.title}}</span>
					<span class="text-grey-1">{{news.createdAt | date}}</span>
				</router-link>
			</template>
        </m-list-card>
        <!-- 英雄列表 -->
        <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
			<!-- #xxx指定name为xxx的插槽  =“{XXXXXX}”获取到插槽里面的XXXXXX的数据 -->
			<template #items="{category}">
                <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
                    <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%" v-for="(hero, i) in category.heroList" :key="i">
                        <img :src="hero.avatar" class="w-100">
                        <div>{{hero.name}}</div>
                    </router-link>
                </div>
			</template>
        </m-list-card>
        <!-- 精彩列表 -->
        <m-list-card icon="card-hero" title="英雄列表">
			<!-- #xxx指定name为xxx的插槽  =“{XXXXXX}”获取到插槽里面的XXXXXX的数据 -->
			<template #items="{category}">

			</template>
        </m-list-card>
        <!-- 图文攻略列表 -->
        <m-list-card icon="card-hero" title="英雄列表">
			<!-- #xxx指定name为xxx的插槽  =“{XXXXXX}”获取到插槽里面的XXXXXX的数据 -->
			<template #items="{category}">

			</template>
        </m-list-card>        
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    filters: {
        date(val) {
            return dayjs(val).format('MM/DD')
        }
    },
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
            },
            newsCats: [],
            heroCats: []
        }
    },
    methods: {
        async fetchNewsCats() {
            const res = await this.$http.get('news/list')
            this.newsCats = res.data
        },
        async fetchHeroCats() {
            const res = await this.$http.get('heroes/list')
            this.heroCats = res.data
        }
    },
    created() {
        this.fetchNewsCats()
        this.fetchHeroCats()
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