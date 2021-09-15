<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
    <home-swiper :swiperItemData="banner"/>
    <recommend-view :recommendItemData="recommend"/>
    <feature-view/>
    <tab-control :homeTitle="['修行','新款','精选']"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import tabControl from "components/content/tabControl/tabControl";

  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import RecommendView from "views/home/childComps/RecommendView";
  import FeatureView from "views/home/childComps/FeatureView";

  import {getHomeMultidata,getHomeGoodsdata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      tabControl,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoodsdata('pop')
      this.getHomeGoodsdata('new')
      this.getHomeGoodsdata('sell')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(result => {
          console.log(result);
          this.banner = result.data.data.banner.list;
          this.recommend = result.data.data.recommend.list;
        })
      },
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsdata(type,page).then(result => {
          const list = result.data.data.list
          for (let item of list) {
            this.goods[type].list.push(item)
          }
          this.goods[type].page += 1
        })
      }
    }
  }


</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .center {
    color: #f6f6f6;
  }
</style>
