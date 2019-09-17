import Accordion from './modules/accordion.js'
import Modal from './modules/modal.js'
import ScrollSuave from './modules/scroll-suave.js'
import TabNav from './modules/tabnav.js'
import Tooltip from './modules/tooltip.js'
import initAnimation from './modules/scroll-animacao.js'
import initDropDown from './modules/dropdown.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initFuncionamento from './modules/funcionamento.js'
import initMenuMobile from './modules/menu-mobile.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"] ')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]')
modal.init()

const toolTip = new Tooltip('[data-tooltip]')
toolTip.init()


initAnimation()
initDropDown()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
