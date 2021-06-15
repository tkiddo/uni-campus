# toast

## 使用

```html
<template>
  <view>
    <button @click="show">show</button>
    <toast ref="toast"></toast>
  </view>
</template>

<script>
  export default {
    methods: {
      show() {
        this.$refs.toast.show({
          title: 'success',
          icon: 'success',
        })
      },
    },
  }
</script>
```

## API

show 方法中可以自定义 toast 选项，包括：

| 属性     |                               说明                               | 类型   | 默认值   |
| -------- | :--------------------------------------------------------------: | ------ | -------- |
| title    |                             显示内容                             | string | ''       |
| icon     | 图标，默认有'success','fail','loading'三种，也可以自定义图标路径 | string | ''       |
| duration |                 消失时间，type 为 loading 时无效                 | number | 500      |
| type     |                   类别，可选'loading','normal'                   | string | 'normal' |
| size     |                  字体大小，可选'small','large'                   | string | 'small'  |
