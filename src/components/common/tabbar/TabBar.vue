<template>

  <div id="tab-bar">
      <slot></slot>
    </div>

</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  @import "../../../assets/css/base.css";
  #tab-bar {
    display: flex; /* display: flex 是一种布局方式。它即可以应用于容器中，也可以应用于行内元素。 */
    background-color: #f6f6f6; /* 背景颜色 */
    /* 使用固定定位 将元素固定到网页底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 设置元素阴影 */
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }

</style>
