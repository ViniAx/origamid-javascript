import outsideClick from './outside.js'

export default function initDropDown() {
  const $dropwDown = document.querySelectorAll('[data-dropdown]')

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => this.classList.remove('active'))
  }

  $dropwDown.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick)
    })
  })
}
