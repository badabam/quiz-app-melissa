import getAllByDataJs from '../js/getAllByDataJs'
import getByDataJs from '../js/getByDataJs'

export default function cards() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const buttonShowAnswer = getByDataJs('buttonShowAnswer', card)
    const answer = getByDataJs('answer', card)

    buttonShowAnswer.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
