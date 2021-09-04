<template>
  <swiper>
    <swiper-item v-for="(item,index) in swiperItemData" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperItemData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
