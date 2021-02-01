import getAllByDataJs from '../js/getAllByDataJs'

export default function bookmarks() {
  const bookmarkIcons = getAllByDataJs('bookmarkicon')

  bookmarkIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('activebookmark')
    })
  })
}
