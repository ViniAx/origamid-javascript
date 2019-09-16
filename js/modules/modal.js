export default class Modal {
  constructor(modal, buttonOpen, buttonClose) {
    this.modal = document.querySelector(modal)
    this.openModal = document.querySelector(buttonOpen)
    this.closeModal = document.querySelector(buttonClose)

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOut = this.clickOut.bind(this)
  }

  toggleModal() {
    this.modal.classList.toggle('ativo')
  }

  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  clickOut(event) {
    if (event.target === this.modal) {
      this.toggleModal()
    }
  }

  addModalEvents() {
    this.openModal.addEventListener('click', this.eventToggleModal)
    this.closeModal.addEventListener('click', this.eventToggleModal)
    this.modal.addEventListener('click', this.clickOut)
  }

  init() {
    if (this.openModal && this.closeModal && this.modal) {
      this.addModalEvents()
    }

    return this
  }
}
