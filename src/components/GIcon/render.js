const className = 'g-icon'

export default function(h) {
  return h(
    'i',
    {
      class: {
        'material-icons': true,
        [`${className}`]: true,
        [`${className}--${this.color}`]: !!this.color
      },
      style: {
        'font-size': this.size !== 24 ? this.size + 'px' : null,
      },
    },
    this.value
  )
}
