import FinderItem from '@/components/GListItem'

const className = 'finder'

function renderContent(h) {
  if (Array.isArray(this.items) && this.items.length) {
    return this.items.map(item => {
      return h(
        FinderItem,
        {
          props: {
            value: item
          },
          key: item.id
        }
      )
    })
  }
}

export default function(h) {
  return h(
    'div',
    {
      attrs: { role: 'list' },
      class: className
    },
    [ renderContent.call(this, h) ]
  )
}
