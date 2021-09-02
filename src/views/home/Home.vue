<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeMultidata} from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar
    },
    created() {
      getHomeMultidata().then(result => {
        console.log(result);
        this.banner = result.data.data.banner;
        this.dKeyword = result.data.data.dKeyword;
        this.keywords = result.data.data.keywords;
        this.recommend = result.data.data.recommend;
      })
    },
    data() {
      return {
        banner: [],
        dKeyword: [],
        keywords: [],
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
