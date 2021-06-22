# toast

## 使用

```js
// main.js
import Vue from 'vue'

import { debounce } from 'uni-campus/plugins'

Vue.use(debounce)
```

```html
<template>
  <view>
    <view>{{count}}</view>
    <button @click="debounce($event, handleClick)" id="btn">debounce</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      handleClick: function () {
        this.count++
      },
    },
  }
</script>
```

## debounce 传参

| 参数名    |        说明         | 类型     | 默认值 |
| --------- | :-----------------: | -------- | ------ |
| event     | 事件，传$event 即可 | 事件     | 无     |
| fn        |    要执行的函数     | function | 无     |
| wait      |      等待时间       | number   | 1000   |
| immediate |    是否立即执行     | boolean  | true   |
