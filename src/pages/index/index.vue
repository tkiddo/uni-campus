<template>
  <view class="home-container">
    <submit-button
      :loading="submitLoading"
      :disabled="disabled"
      @submit="handleSubmit"
      :styles="styleObject"
      loadingIcon="/static/icons/loading.png"
      >Submit</submit-button
    >
    <toast ref="toast"></toast>
  </view>
</template>

<script>
  // import SubmitButton from '../../packages/lib/submit-button.vue'
  import SubmitButton from 'uni-campus/lib/submit-button.vue'
  export default {
    components: {
      SubmitButton,
    },
    data() {
      return {
        submitLoading: false,
        disabled: false,
        styleObject: {
          width: '300px',
          height: '40px',
          background: 'skyblue',
        },
      }
    },
    onLoad() {},
    methods: {
      handleSubmit() {
        // this.submitLoading = true
        this.disabled = true
        this.$refs.toast.show({
          type: 'loading',
          icon: 'loading',
          title: 'loading...',
        })
        setTimeout(() => {
          // this.submitLoading = false
          // this.$refs.toast.show({
          //   title: '成功了',
          //   icon: 'success',
          // })
          this.disabled = false
          this.$refs.toast.hide()
        }, 1000)
      },
    },
  }
</script>

<style lang="scss">
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
