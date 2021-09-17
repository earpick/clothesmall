<template>
  <div class="tab-control">
    <div v-for="(item, index) in homeTitle"
         class="tab-control-item"
         :class="{'active': index === currentIndex}"
         @click="discoloration(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    homeTitle: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    discoloration(index) {
      this.currentIndex = index;
      this.$emit("tab-click-title",index);
    }
  }

}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  /* 下横线 */
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

  /* 标头吸顶效果 */
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
