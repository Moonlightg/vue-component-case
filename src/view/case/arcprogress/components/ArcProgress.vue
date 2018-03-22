<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="arc-progress"
      :height="size"
      :width="size"
    >
      <path class="progress-background"
        :d="drawnArc(initArc.positionX, initArc.positionY, radiusArc.arcRadius, -startArc.arcStart, startArc.arcStart)"
        :stroke="initArc.arcBackgroundColor"
        :stroke-width="strokeWidth"
      />
      <path class="progress-fill"
        :d="drawnArc(initArc.positionX, initArc.positionY, radiusArc.arcRadius, -startArc.arcStart, startArc.arcStart)"
        :stroke-dasharray="dashArray.strokeDashArray"
        :stroke-dashoffset="initArc.fillValue"
        :stroke="initArc.arcProgressColor"
        :stroke-width="strokeWidth"
      />
    </svg>
    <p>获得的值：<br/>
      尺寸 - size： {{size}}<br/>
      差距 - gap: {{gap}}<br/>
      百分比 - progress: {{progress}}%<br/>
      圆角 - radius: {{radiusArc.arcRadius}}<br/>
      背景颜色 - backgroundColor: {{backgroundColor}}<br/>
      进度条色 - progressColor: {{progressColor}}<br/>
      描边宽度 - strokeWidth: {{strokeWidth}}<br/>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    size: {
      type: Number,
      required: true
    },
    // 差距：在90到180度的圈中的差距。
    gap: {
      type: Number,
      required: true
    },
    progress: {
      type: Number
    },
    backgroundColor: {
      type: String
    },
    progressColor: {
      type: String
    },
    // 圆弧宽度
    strokeWidth: {
      type: Number
    }
  },
  computed: {
    initArc () {
      let obj = {
        arcBackgroundColor: this.backgroundColor ? this.backgroundColor : 'lightgrey',
        arcProgressColor: this.progressColor ? this.progressColor : 'blue',
        // arcStrokeWidth: this.strokeWidth ? this.strokeWidth : 1,
        // arcSize: this.size ? this.size : 300,
        // arcRadius: (45 * this.size) / 100,
        // arcStart: this.gap ? 180 - this.gap : 90,
        positionX: this.size / 2,
        positionY: this.size / 2,
        // range: (this.start / 88),
        // strokeDashArray: this.radius * Math.PI * this.range,
        // strokeDashOffSet: (this.radius * Math.PI * this.range * -1),
        fillValue: ((this.progress * this.dashArray.strokeDashArray) / 100) + this.dashOffSet.strokeDashOffSet
      }
      console.log(obj)
      return obj
    },
    // 圆角
    radiusArc () {
      let obj = {
        arcRadius: (45 * this.size) / 100
      }
      console.log(obj)
      return obj
    },
    // 起点
    startArc () {
      let obj = {
        arcStart: this.gap ? 180 - this.gap : 90
      }
      console.log(obj)
      return obj
    },
    // 范围
    rangeArc () {
      let obj = {
        range: this.startArc.arcStart / 88
      }
      console.log(obj)
      return obj
    },
    dashArray () {
      let obj = {
        strokeDashArray: this.radiusArc.arcRadius * Math.PI * this.rangeArc.range
      }
      return obj
    },
    dashOffSet () {
      let obj = {
        strokeDashOffSet: this.radiusArc.arcRadius * Math.PI * this.rangeArc.range * -1
      }
      return obj
    }
  },
  methods: {
    drawnArc (x, y, radius, startAngle, endAngle) {
      endAngle = endAngle - 0.0001
      const start = this.polarToCartesian(x, y, radius, endAngle)
      const end = this.polarToCartesian(x, y, radius, startAngle)
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
      const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')
      return d
    },
    polarToCartesian (centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      }
    }
  }
}
</script>
<style type="text/css">
svg.arc-progress {
  margin: auto;
  display: block;
}

svg.arc-progress path {
  stroke-linecap: round;
}

svg.arc-progress path.progress-background {
  fill: none;
}

svg.arc-progress path.progress-fill {
  fill: none;
}
</style>