export default function initAnimaNumeros() {
  function animaNumeros() {
    const $numeros = document.querySelectorAll('[data-numero]')
  
    $numeros.forEach( numero => {
      let total = +numero.innerText
      let start = 0;
  
      let inscremento = Math.floor(total / 100)
  
      let timer = setInterval(() => {
        start += inscremento
        numero.innerText = start
        if(start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random());
    })
  }
  
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }
  
  const observeTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)
  
  observer.observe(observeTarget, {attributes: true})
}