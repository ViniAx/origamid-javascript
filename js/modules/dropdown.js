import outsideClick from './outside.js'

export default class DropDown {
  constructor(dropwDown, events) {
    this.dropwDown = document.querySelectorAll(dropwDown)

    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events;
    }
    this.activeClass = 'active'
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
  }

  activeDropDownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => element.classList.remove(this.activeClass))
  }

  addDropDownMenuEvents() {
    this.dropwDown.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu)
      })
    })
  }

  init() {
    if (this.dropwDown.length) {
      this.addDropDownMenuEvents()
    }

    return this
  }
}
