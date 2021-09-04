<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
    <home-swiper :swiperItemData="banner"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    created() {
      getHomeMultidata().then(result => {
        console.log(result)
        this.banner = result.data.data.banner.list;
      })
    },
    data() {
      return {
        banner: []
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
