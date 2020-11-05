<template>
<div class="home-page">
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
        </div>
    </div>

    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <div class="feed-toggle">
                    <ul class="nav nav-pills outline-active">
                        <li v-if="user" class="nav-item">
                            <nuxt-link class="nav-link" :class="{active:tab === 'your_feed'}" :to="{
                                    name:'home',
                                    query:{
                                        tab:'your_feed'
                                    }
                                }">Your Feed</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" :class="{
                                  active: tab === 'global_feed'
                                }" exact :to="{
                                  name: 'home'
                                }">Global Feed</nuxt-link>
                        </li>
                        <li v-if="tag" class="nav-item">
                            <nuxt-link class="nav-link" :class="{active:tab==='tag'}" :to="{
                                    name:'home',
                                    query:{
                                       tab:'tag',
                                       tag:tag
                                    }
                                }">#{{tag}}</nuxt-link>
                        </li>
                    </ul>
                </div>

                <div v-for="article in articles" :key="article.slug" class="article-preview">
                    <div class="article-meta">
                        <nuxt-link :to="{
                                name:'profile',
                                params:{
                                    username:article.author.username
                                }
                            }"><img :src="article.author.image" /></nuxt-link>
                        <div class="info">
                            <nuxt-link class="author" :to="{
                                    name:'profile',
                                    params:{
                                        username:article.author.username
                                    }
                                }">{{article.author.username}}</nuxt-link>
                            <span class="date">{{article.createdAt|date('MMM DD,YYY')}}</span>
                        </div>
                        <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{
                                active:article.favorited
                            }" @click='onFavorite(article)'>
                            <i class="ion-heart"></i> {{article.favoritesCount}}
                        </button>
                    </div>
                    <nuxt-link :to="{
                            name:'article',
                            params:{
                                slug:article.slug
                            }
                        }" class="preview-link">
                        <h1>{{article.title}}</h1>
                        <p>{{article.description}}</p>
                        <span>Read more...</span>
                    </nuxt-link>
                </div>

                <div class="article-preview">
                    <div class="article-meta">
                        <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                        <div class="info">
                            <a href="" class="author">Albert Pai</a>
                            <span class="date">January 20th</span>
                        </div>
                        <button class="btn btn-outline-primary btn-sm pull-xs-right">
                            <i class="ion-heart"></i> 32
                        </button>
                    </div>
                    <a href="" class="preview-link">
                        <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                        <p>This is the description for the post.</p>
                        <span>Read more...</span>
                    </a>
                </div>
                <!-- 分页列表 -->
                <ul class="pagination">
                    <li v-for="item in totalPage" :key="item" class="page-item" :class="{
                            active:item===page}">

                        <nuxt-link class="page-link" :to="{
                                name:'home',
                                query:{
                                    page:item,
                                    tag:$route.query.tag,
                                    tab:tab
                                }
                            }">{{item}}</nuxt-link>

                    </li>
                </ul>

            </div>

            <div class="col-md-3">
                <div class="sidebar">
                    <p>Popular Tags</p>

                    <div class="tag-list">

                        <nuxt-link v-for="item in tags" :key="item" :to="{
                                name:'home',
                                query:{
                                    tag:item,
                                    tab:'tag'
                                }
                            }" class="tag-pill tag-default">{{item}}
                        </nuxt-link>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import {
    getArticles,
    getFeedArticles,
    addFavorite,
    deleteFavorite,
} from '@/api/article'
import {
    getTags
} from '@/api/tag'

export default {
    name: 'HomeIndex',
    // query:查询字符串参数对象
    async asyncData({
        query
    }) {

        const page = Number.parseInt(query.page || 1)
        const limit = 2
        const tab = query.tab || 'global_feed'
        // console.log(tagData);
        // const tab = query.tab || 'your_feed'
        const loadArticles = tab === 'your_feed' ? getFeedArticles : getArticles
        const [articleRes, tagRes] = await Promise.all([loadArticles({
                limit,
                offset: (page - 1) * limit
            }),
            getTags(),

        ])
        const {
            tag
        } = query
        const {
            articles,
            articlesCount
        } = articleRes.data

        const {
            tags
        } = tagRes.data
        return {
            tags,
            articles,
            articlesCount,
            limit,
            page,
            tag,
            tab: query.tab || 'global_feed'
        }
    },
    watchQuery: ['page', 'tag', 'tab'],
    components: {

    },
    data() {

        return {}
    },
    computed: {
        totalPage() {
            return Math.ceil(this.articlesCount / this.limit)
        },
        ...mapState(['user'])
    },
    methods: {
        async onFavorite(article) {
            // console.log(article);
            if (article.favorited) {
                // 取消点赞
                await deleteFavorite(article.slug)
                article.favorited = false
                article.favoritesCount += -1

            } else {
                // 点赞
                await addFavorite(article.slug)
                article.favorited = true
                article.favoritesCount += 1

            }
        }
    },
}
</script>
