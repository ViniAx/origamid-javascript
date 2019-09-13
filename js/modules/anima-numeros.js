export default function initAnimaNumeros() {
  function animaNumeros() {
    const $numeros = document.querySelectorAll('[data-numero]')

    $numeros.forEach((numero) => {
      const total = +numero.innerText
      let start = 0;

      const inscremento = Math.floor(total / 100)

      const timer = setInterval(() => {
        start += inscremento
        numero.innerText = start
        if (start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random());
    })
  }
  const observeTarget = document.querySelector('.numeros')

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }

  const observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })
}
