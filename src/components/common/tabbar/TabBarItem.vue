<template>

    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" ><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>

    </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeFontColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。没有找到返回-1
      // 例: 当this.$route.path=/home时
      //      index(/home) == ture
      //      index(/sort) == false
      //      index(/shopCart) == false
      //      index(/profile) == false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeFontColor} : {}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1; /* 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容 */
    text-align: center; /* 文本水平居中 */
    height: 49px; /* 文本高度 */
    font-size: 14px;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px; /* 图片与顶部边框的间距*/
    vertical-align: middle; /* 图片下面默认空出3个像素, vertical-align垂直对齐方式 middle 中间 */
    margin-bottom: 2px; /* 图片与下面文本的间距*/
  }

</style>
