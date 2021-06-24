<template>
  <view class="toast-container" v-if="isShow">
    <view class="content">
      <img :class="type" :src="icon" v-if="icon" />
      <span :class="size">{{ title }}</span>
    </view>
  </view>
</template>

<script>
  const iconMap = {
    success:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFmSURBVHgB7dvhTcMwEEDhCxMwQkdghI7ACIzABnQENqg3CSOwQUdgBJMIH0SivTptEju590lWW6nSXZ+aP5EiAgAAAACYWozxqTtt/HPszk7wG+cr/nfqzqN4ZsRRB/EqI06v7b/7IM70cbqX/sf7voTOyfznqBfxZGScIJ4Qx0AcA3EMxDEQx0AcA3EMxDEQx0AcA3EMxDEQx1A8TlpgLxUqGicNPw0G9O9fpRKl4+yM4W9SWKzgsjpeGVosUvE4aYk2Y/jikaqIkxYJmUssFqmaOGmZfcw3e6Sq4gyWOsR8s0WqMs5guaKRqo4zWLJIpFXEGSy7aKRVxVFLRVplHDV3pFXHUXNF2kQcNXWkTcVRU0XaZBx1b6RNx1G3RnIRR42N5CqOGhnJ5w32kZF8xVETRQqyZXdGCuLBjZGCeDIyUhCPMiMF8exKpCC4GOldVqaRGcWfB9Oe08fPpmk+BAAAAADwDd1z4sN96FsbAAAAAElFTkSuQmCC',
    fail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOdSURBVHgBzVqBddMwEL0wgZkAM0HNBLgT0A0SJiAbNEyQMEG6QZgAwwK0XaAKCzSZoB/pWQFXPslnWXby37vX10g6+d/pTmdZM0oIAIX+81FLYSXTkjvd9lYetSgtv2az2QNdCjSJUstGywHxUFq21iBnJVIhPe61zGkqjEjEhdKSU0/MpB21chMPt1qWgW5HLT+t/NFiYuOoY+TY0JFTHVtXWkorWUDnRsvXk44kMJayFvOhQu25LFL/jZZdam/5JivgD/hdsonon+HuPHOZZxiWNLSCecBiJY0Ea0TlmTsuYVilHEyKjlpaPefP7Fwc+nnKup5bZiuaGGZO5jnMs+VSBZnH3Ss6EzyklGil6E7rSyLTeC6O1LprUM4M2tCFAHxMlaEBKsqtEwF8OFS+zguG/fmKRQ9Qb+DdXkJdFDaxFc5xWqrRnrSWz3v03wW9BH7PyYXKm0mk96aHevM+bRFr4Zgi6CW0y43vQsVcEhGTAl+J5MKxlTNu02xUTuMnodIM/AbcSQr+skq0dNGOpcOpoWAbhACfTIKkAmQWJITHmIVpWDo/ipZbLKkUZBq63OSw5DarJUVAQiolGavPdcaWC66SIhEihcRk7Hw3jq57LiEM2kwDpJKSsXO5WVYRM8ngUkdIakEDgToxvEKLECVCB6kFJYKr+A2NB0S2DZx1nCU3RzcGHyb6lpxyfstpAIRkkpBCuyhQZsm5B3hXFAn7gHdM02crLu4GknJX054rTGM31rnHC4tGn95lUsec7sa6SVX6zNFBZgxS8JQ+reIUPRIDIiqAVKTAFaeehlKoMOtLpoOU2Jholz2q2egWqJVQaR5DpoNULhjHLbdts0PJKBbVdA1jHBD3CtAkJToy8xiycDtVTocdCYEJD0msd9zM/JvryHmppAuCJXPNPOfcN6ByOipc/kHjU2gA5yXR0dLYsN7hzt3zroHc+fEtnRGWzCrK2PB/TjkLqQCZJ0jDAf4PXpORskRmHjLP6PtWAP8nyTVGThSWzFvwMfOC2HMP+GsuhRG+TDS8cg1+2RsyCxoChD/rb5Hos74l8gH+WyrPyYyI7osXpq66oQigTkLXCF+3eZIaru/VmJWWL4Fuzasxj/b/vXM1xoix9DvqvhpjDlO+UeqrMa9m6PZWCphY+YEpSy/UCeMeaTE9EYaYSRqm+lXojxcrJuDXKYiIY0gC/L+i+Z7q06Oc2lc0zZuliYcHquMs6RXNvwsrRXRztHt0AAAAAElFTkSuQmCC',
    loading:
      'data:image/png;base64,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',
  }
  export default {
    data() {
      return {
        isShow: false,
        icon: '',
        size: 'small',
        title: '',
        type: 'normal',
        timer: null,
      }
    },
    beforeDestroy() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.hide()
    },
    methods: {
      show(options) {
        const { title, duration, icon, type, size } = options
        this.isShow = true
        this.title = title
        this.icon = iconMap[icon] || icon
        this.type = type
        this.size = size === 'small' || size === 'large' ? size : 'small'
        if (this.type !== 'loading') {
          this.timer = setTimeout(
            () => {
              this.hide()
            },
            /(^[1-9]\d*$)/.test(duration) ? duration : 500
          )
        }
      },
      hide() {
        this.isShow = false
        this.icon = ''
        this.size = 'small'
        this.title = ''
        this.type = 'normal'
        this.timer = null
      },
    },
  }
</script>

<style lang="scss">
  .toast-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
      background: rgba(27, 28, 51, 0.9);
      border-radius: 12rpx;
      // height: 240rpx;
      min-width: 240rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 48rpx;
      box-sizing: border-box;
    }
    img {
      width: 52rpx;
      height: 52rpx;
      margin-bottom: 30rpx;
    }
    span {
      color: white;
      font-size: 28rpx;
      line-height: 44rpx;
      text-align: center;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
    }
    .small {
      font-size: 28rpx;
      line-height: 44rpx;
    }
    .large {
      font-size: 72rpx;
      line-height: 72rpx;
    }
    .loading {
      animation: loading-rotate 1s linear infinite;
    }
    @keyframes loading-rotate {
      0% {
        -webkit-transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(180deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
  }
</style>
