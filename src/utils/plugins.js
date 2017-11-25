import Waves from 'node-waves'
import _ from 'lodash'

export const ActionSheetPlugin = {
  install: function (Vue, option) {
    // 注入组件
    Vue.mixin({
      mounted: function () {
        var self = this
        this.$events.on('toggle', (name, value) => {
          if (_.has(self, name)) {
            // _.includes(name, '.') ? _.set(self, name, value) : _.isFunction(self.set) && self.set(name, value)
            _.set(self, name, value)
          }
        })
      },
      methods: {
        showActionSheet (key) {
          this.$events.emit('showActionSheet', key)
        },
        hideActionSheet (key) {
          this.$events.emit('hideActionSheet', key)
        }
      }
    })
  }
}

export const ScmWavesPlugin = {
  install: function (Vue, option) {
    Waves.init(option)
    Vue.directive('waves', {
      inserted: function (el, bind) {
        var classes = Object.keys(bind.modifiers).map(function (val) {
          return 'waves-' + val
        })
        Waves.attach(el, classes)
      }
    })
  }
}
