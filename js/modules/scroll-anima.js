export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.5;

    this.animaScroll = this.animaScroll.bind(this)
  }


  animaScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVinsible = (sectionTop - this.windowMetade) < 0
      if (isSectionVinsible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo')
      }
    })
  }

  init() {
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll)
  }
}
