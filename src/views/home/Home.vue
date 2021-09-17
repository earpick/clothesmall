<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
    <home-swiper :swiperItemData="banner"/>
    <recommend-view :recommendItemData="recommend"/>
    <feature-view/>
    <tab-control
      :homeTitle="['流行','新款','精选']"
      @tab-click-title="titleNumber"
    />
    <goods-list :goodsData="showGoods"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import RecommendView from "views/home/childComps/RecommendView";
  import FeatureView from "views/home/childComps/FeatureView";

  import {getHomeMultidata,getHomeGoodsdata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
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
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoodsdata('pop');
      this.getHomeGoodsdata('new');
      this.getHomeGoodsdata('sell');
    },
    methods: {
      /**
       *  事件监听相关方法
       */
      titleNumber(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

      },
      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(result => {
          console.log(result);
          this.banner = result.data.data.banner.list;
          this.recommend = result.data.data.recommend.list;
        })
      },
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsdata(type,page).then(result => {
          const list = result.data.data.list;
          for (let item of list) {
            this.goods[type].list.push(item)
          }
          this.goods[type].page += 1;
        })
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType];
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
