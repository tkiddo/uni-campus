<template>
  <view
    class="btn-wrapper"
    @click="handleClick"
    :style="{
      width: styles.width || '200px',
      height: styles.height || '30px',
      color: styles.color || '#ffffff',
      background: styles.background || '#1890ff',
      borderRadius: styles.borderRadius || '5px',
      border: styles.border || 'none',
      margin: styles.margin || '0',
      padding: styles.padding || '0'
    }"
  >
    <image v-if="loading" :src="loadingIcon" class="loading-icon" />
    <slot>Submit</slot>
  </view>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: {
        borderRadius: '10rpx',
        width: '400rpx',
        height: '60rpx',
        color: '#ffffff',
        background: '#1890ff',
        border: 'none'
      }
    },
    loadingIcon: {
      type: String,
      default:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIklEQVRYR+2W64tOURTGf49cksswRcklyi2EUnyQJMkXf65PPkyKYkJSMhozUq5jKMpdPFrZb+15O/ucfeYdTWpW7c5537Muz37W2mttscyiZY7PCoD/nwHbp4HPwCdgTtK3PnU1MgO2rwwFfAPMSPpQA+RfAIi4vxOI6S4QSwFgDNgMxHM8vQ/iPpf0oA3EyABy57bXAkeAXdn/TyU9KoEoArA9JuljF4VN323vBY5l325Letek2wYgHGwFpiXN9QViO+wDSMhLSferAdheD5wHVgM/JF1bBICNwFlgDfATmJAUzwXSyIDtyOHJpNlZSCVwtg8BB9L3e5Je1wI4CuxLyncWk4KwtR0pDBZCGouxxMAZYFtYSbral/6Bvu0NwIX0+72kW7UMHAf2JOXrkqLN9hbbkf/LbYVYYuAgECtklBREMV9MfqI9P65lIOiPNIRMSZrtvf2/NXAC2J1sJyXN1wJYB1xKyt+BG32nXDrKkf9VwBdJE02baGtEeR3MS5rsw4LtPI3RzBoHU2srBs5lQe9KilHbKUPB435ws8Rg6zCyvR84nEWcAZ5I+lVCMRQ81Bob0MC+cxo2OIwj+SLymt2ENgHb09qSgXso6VkbZZ0Awtj2DuBUJ/cLFYp5z9WqACQQcenYmWZ9nJKSvAqGJL2tAVwNYODMdkzIuP3EiveQmHJRbF9r74LVNVCzi1F0ejMwSrBejWipA5X8rTDwB1zAvSFz5efRAAAAAElFTkSuQmCC'
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

<style lang="scss">
.btn-wrapper {
  padding: 10rpx 0;
  cursor: pointer;
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
