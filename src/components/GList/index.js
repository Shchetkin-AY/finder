import render from './render'

export default {
  name: 'GList',

  props: {
    items: {
      type: Array,
      default: () => ([])
    },

    show: {
      type: Boolean,
      default: false
    }
  },

  render
}