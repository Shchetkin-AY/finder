import Layout from '@/layout'

export default function(h) {
  return h(
    Layout,
    {},
    [
      h('router-view'),
    ]
  )
}