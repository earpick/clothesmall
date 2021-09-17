<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in singlePageGoodsData" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsData: {
      type: Object,
      default () {
        return [];
      }
    }
  },
  computed: {
    singlePageGoodsData() {
      return this.goodsData.list;
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
