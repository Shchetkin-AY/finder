export default function(h) {
  return h(
    'div',
    {
      attrs: { id: 'app' },
      class: 'app'
    },
    [
      this.$slots.default
    ]
  )
}