<template>
  <view class="form-container">
    <view>Form</view>
    <view class="form-item">
      <view class="form-label">说明</view>
      <view class="form-input">
        <input placeholder="请输入说明" />
      </view>
    </view>
    <view class="form-item">
      <view
        class="form-label"
        :style="{ paddingTop: ios ? '8px' : '0', width: ios ? '76px' : '80px' }"
        >说明</view
      >
      <view class="form-input">
        <textarea placeholder="请输入说明" class="txt"></textarea>
      </view>
    </view>
    <view>{{ count }}</view>
    <button @click="debounce($event, handleClick)" id="btn1">debounce</button>
    <button @click="debounce($event, handleTwo)" id="btn2">two</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        ios: false,
        count: 0,
      }
    },
    mounted() {
      const sys = uni.getSystemInfoSync()
      console.log(sys.platform)
      if (sys.platform === 'ios') {
        this.ios = true
      } else if (sys.platform === 'android') {
        this.ios = false
      }
    },
    methods: {
      handleClick: function () {
        this.count++
      },
      handleTwo() {
        console.log('two')
      },
    },
  }
</script>

<style lang="scss">
  .form-container {
    padding: 40rpx;
    .form-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20rpx 0;
      border-bottom: 1rpx solid #e5e5e5;
      .form-label {
        width: 160rpx;
      }
      .form-input {
        flex: 1;
      }
      .txt {
        height: 200rpx;
        max-width: 500rpx;
      }
      &:last-child {
        align-items: flex-start;
      }
    }
  }
</style>
