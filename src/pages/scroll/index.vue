<template>
  <scroll-view class="page" :scroll-y="!visible">
    <view class="bg-wrapper">
      <image src="/static/images/2.jpg" width="100%" mode="widthFix" @click="show" />
    </view>
    <view class="modal" v-if="visible">
      <view class="modal-inner">
        <button @click="hide">close</button>
        <view class="img-wrapper">
          <image src="/static/images/2.jpg" width="100%" mode="widthFix" />
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      },
      move() {},
    },
  }
</script>

<style lang="scss">
  .page {
    height: 100vh;
  }
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .modal-inner {
      width: 100%;
      height: 700rpx;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      .img-wrapper {
        height: 600rpx;
        overflow: scroll;
      }
    }
  }

  .no-scroll {
    height: 100vh;
    overflow: hidden;
  }
</style>
