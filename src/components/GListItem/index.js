import render from './render'

export default {
  name: 'GListItem',

  props: {
    value: {
      type: Object,
      default: () => ({})
    },

    suffix: {
      type: String,
      default: undefined
    } 
  },

  data() {
    return {
      showList: false
    }
  },

  computed: {
    isNode() {
      return !!this.value.node && Array.isArray(this.value.children) && this.value.children.length
    },

    label() {
      const result = [this.value.name]
      if (!this.isNode && this.value.price) {
        result.push(`(${parseFloat(this.value.price).toFixed(1)})`)
      }

      return result.join(' ')
    }
  },
 
  render
}