import getByDataJs from '../js/getByDataJs'

export default function createForm() {
  const formContainer = getByDataJs('formContainer')
  const formCards = formContainer.querySelectorAll('[data-js="formCard"]')
  const submitText = getByDataJs('submitText')

  formContainer.addEventListener('submit', event => {
    event.preventDefault()
    formContainer.reset()
    submitText.hidden = false
  })

  formCards.forEach(formCard => {
    const formInput = getByDataJs('formInput')
    const counter = getByDataJs('counter')

    formInput.addEventListener('input', () => {
      const textLength = formInput.value.length
      counter.innerHTML = formInput.maxLength - textLength
    })
  })
}
