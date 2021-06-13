<template>
  <view class="content">
    <submit-button
      :loading="submitLoading"
      :disabled="submitLoading"
      @submit="handleSubmit"
      :styles="styleObject"
      loadingIcon="/static/icons/loading.png"
      >Submit</submit-button
    >
  </view>
</template>

<script>
  import SubmitButton from '../../packages/lib/submit-button.vue'
  // import SubmitButton from 'uni-campus/lib/submit-button.vue'
  export default {
    components: {
      SubmitButton,
    },
    data() {
      return {
        submitLoading: false,
        styleObject: {
          width: '300px',
          height: '60px',
          background: 'orange',
        },
      }
    },
    onLoad() {},
    methods: {
      handleSubmit() {
        this.submitLoading = true
        setTimeout(() => {
          this.submitLoading = false
        }, 1000)
      },
    },
  }
</script>

<style lang="scss"></style>
