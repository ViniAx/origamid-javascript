function initTabNav() {
  const $tabMenu = document.querySelectorAll('.js-tabmenu li');
  const $tabContent = document.querySelectorAll('.js-tabcontent section')
  $tabContent[0].classList.add('ativo')


  if($tabMenu.length && $tabContent.length) {
    function activeTab(index) {
      $tabContent.forEach(section => section.classList.remove('ativo'))
      $tabContent[index].classList.add('ativo');
    }

    $tabMenu.forEach( (item, index) => {
      item.addEventListener('click', () => activeTab(index))
    })
  }
}

function initAccordion() {
  const $accordionList = document.querySelectorAll('.js-accordion dt');
  const classAtivo = 'ativo';
  $accordionList[0].classList.add(classAtivo)
  $accordionList[0].nextElementSibling.classList.add(classAtivo)
  
  if($accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(classAtivo)
      this.nextElementSibling.classList.toggle(classAtivo)
    }
  }
  
  $accordionList.forEach( item => item.addEventListener('click', activeAccordion))
}

function initScroll() {
  const $links = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  $links.forEach( item => {
    item.addEventListener('click', scrollToSection);
  })
}

function initAnimation() {
  const $section = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.5;

  function animaScroll() {
    $section.forEach( item => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVinsible = ( sectionTop - windowMetade) < 0
      if(isSectionVinsible) {
        item.classList.add('ativo');
      }
    })
  }
  window.addEventListener('scroll', animaScroll)
  animaScroll()
}



initTabNav()
initAccordion()
initScroll()
initAnimation()