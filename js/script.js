import initAnimation from './modules/scroll-animacao.js'
import initDropDown from './modules/dropdown.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initFuncionamento from './modules/funcionamento.js'
import initMenuMobile from './modules/menu-mobile.js'
import initModal from './modules/modal.js'
import initTabNav from './modules/tabnav.js'
import initTooltip from './modules/tooltip.js'
import ScrollSuave from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"] ')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt)

initAnimation()
initTabNav()
initModal()
initTooltip()
initDropDown()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
