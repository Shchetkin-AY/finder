import FinderItem from '@/components/GListItem'

const className = 'g-list'

export default function(h) {
  if (this.show) {
    return h(
      'div',
      {
        class: className
      },
      this.items.map(item => {
        return h(
          FinderItem, 
          {
            props: {
              value: item
            }
          }
        )
      })
    )
  }
}
