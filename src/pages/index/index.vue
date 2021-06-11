<template>
  <view class="content">
    <submit-button :loading="submitLoading" @submit="handleSubmit" class="submit-btn"
      >Submit</submit-button
    >
  </view>
</template>

<script>
import SubmitButton from 'uni-campus/lib/submit-button.vue';
export default {
  components: {
    SubmitButton
  },
  data() {
    return {
      submitLoading: false
    };
  },
  onLoad() {},
  methods: {
    handleSubmit() {
      this.submitLoading = true;
      setTimeout(() => {
        console.log('finish');
        this.submitLoading = false;
      }, 1000);
    }
  }
};
</script>

<style>
.submit-btn {
  width: 200rpx;
}
</style>
