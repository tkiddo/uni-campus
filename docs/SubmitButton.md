# SubmitButton

## 使用

```html
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
  import SubmitButton from 'uni-campus/lib/submit-button.vue'
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
```

## 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | :-: | --- | --- |
| loading | 是否显示 loading | boolean | false |
| loadingIcon | 自定义 loading 图标 | string | '...' |
| disabled | 是否置灰禁用 | boolean | false |
| styles | 自定义样式,支持 borderRadius,width,height,color,background,border | object | {} |
