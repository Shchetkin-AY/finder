import render from './render'

export default {
  name: 'GIcon',

  props: {
    value: {
      type: String,
      default: undefined
    },

    size: {
      type: Number,
      default: 24
    },
  },

  render
}