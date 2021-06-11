<template>
  <view class="btn-wrapper" @click="handleClick">
    <image v-if="loading" src="/static/icon/icon-loading.png" class="loading-icon" />
    <slot>Submit</slot>
  </view>
</template>

<script>
export default {
  props: {
    loadingText: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.loading) {
        return;
      }
      this.$emit('submit');
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  padding: 10rpx 0;
  background: skyblue;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
