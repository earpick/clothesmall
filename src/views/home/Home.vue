<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
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
