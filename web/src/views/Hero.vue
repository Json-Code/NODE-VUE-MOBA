<template>
    <div class="page-hero" v-if="model">
        <!-- 王者荣耀下载 -->
        <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
            <img src="../assets/logo.png" alt="" height="30">
            <div class="px-2 flex-1">
                <span class="text-white">王者荣耀</span>
                <span class="ml-2">攻略战</span>
            </div>
            <router-link tag="div" to='/'>更多英雄 &gt;</router-link>
        </div>
        <!-- banner背景 -->
        <div class="top" :style="{'background-image': `url(${model.banner})`}">
            <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
                <div>{{model.title}}</div>
                <h2 class="my-2">{{model.name}}</h2>
                <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
                <div class="d-flex jc-between pt-2">
                    <div class="scores flex-1 d-flex ai-center">
                        <span>难度</span>
                        <span class="badge bg-primary">{{model.scores.difficult}}</span>
                        <span>技能</span>
                        <span class="badge bg-info">{{model.scores.difficult}}</span>
                        <span>攻击</span>
                        <span class="badge bg-danger">{{model.scores.difficult}}</span>
                        <span>生存</span>
                        <span class="badge bg-drak">{{model.scores.difficult}}</span>
                    </div>
                    <router-link tag="span" to="/" class="text-grey">
                        皮肤2 &gt;
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {required: true}
    },
    data() {
        return {
            model: null
        }
    },
    methods: {
        async fetch() {
            const res = await this.$http.get(`heroes/${this.id}`)
            this.model = res.data
        }
    },
    created() {
        this.fetch()
    }
}
</script>

<style lang="scss" scoped>
.page-hero {
    .top {
        height: 50vw;
        background: #fff no-repeat top center;
        background-size: auto 100%;
    }
    .info {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
        .scores {
            .badge {
                margin: 0 0.25rem;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                border-radius: 50%;
                font-size: 0.75rem;
                border: 1px solid rgba(255, 255, 255, 0.3)
            }
        }
    }
}
</style>