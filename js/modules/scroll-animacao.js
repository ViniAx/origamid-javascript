export default function initAnimation() {
  const $sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.5;

  function animaScroll() {
    $sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVinsible = (sectionTop - windowMetade) < 0
      if (isSectionVinsible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo')
      }
    })
  }

  if ($sections.length) {
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}
