import GList from '@/components/GList'

import GIcon from '@/components/GIcon'

const className = 'g-list-item'

function renderList(h) {
  if (this.isNode && this.showList) {
    return h(
      GList,
      {
        props: {
          items: this.value.children,
          show: this.showList
        }
      }
    )
  }
}

function renderPrefix(h) {
  if (this.isNode) {
    return h(
      'div',
      {
        class: `${className}__prefix`
      },
      [
        h(
          GIcon, {
            props: {
              value: this.showList ? 'expand_more' : 'navigate_next'
            }
          }
        )
      ]
    )
  }

  return this.$slots.prefix
}

function renderSuffix(h) {
  if (this.value.suffix) {
    return h(
      'div',
      {
        class: `${className}__suffix`
      }, 
      //icon
    )
  }

  return this.$slots.suffix
}

function renderLabel(h) {
  return h(
    'div',
    {
      class: `${className}__label`
    },
    this.label,
  )
}

function renderListItem(h) {
  return h(
    'div',
    {
      class: {
        [`${className}`]: true,
        [`${className}--node`]: this.isNode,
        [`${className}--prefix`]: this.isNode,
        [`${className}--active`]: this.isNode && !!this.showList
      },
      key: this.value.id,
      on: {
        click: event => {
          event.stopPropagation()
          this.showList = !this.showList
        }
      }
    },
    [
      renderPrefix.call(this, h),
      renderLabel.call(this, h),
      renderSuffix.call(this, h),
    ]
  )
}

export default function(h) {
  return h(
    'div',
    {},
    [
      renderListItem.call(this, h),
      renderList.call(this, h)
    ]
  )
}
