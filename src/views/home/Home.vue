<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
    <home-swiper :swiperItemData="banner"/>
    <recommend-view :recommendItemData="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import RecommendView from "views/home/childComps/RecommendView";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      getHomeMultidata().then(result => {
        console.log(result)
        this.banner = result.data.data.banner.list;
        this.recommend = result.data.data.recommend.list;
      })
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    }
  }


</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }
  .center {
    color: #f6f6f6;
  }
</style>
