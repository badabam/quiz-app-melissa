import getByDataJs from '../js/getByDataJs'

export default function navigation() {
  const pagehome = getByDataJs('pagehome')
  const pagebookmark = getByDataJs('pagebookmark')
  const pagecreate = getByDataJs('pagecreate')
  const pageprofile = getByDataJs('pageprofile')

  const iconhome = getByDataJs('iconhome')
  const iconbookmark = getByDataJs('iconbookmark')
  const iconcreate = getByDataJs('iconreate')
  const iconprofile = getByDataJs('iconprofile')

  iconhome.addEventListener('click', () => {
    pagehome.hidden = false
    pagebookmark.hidden = true
    pagecreate.hidden = true
    pageprofile.hidden = true

    iconhome.classList.add('active-icon')
    iconbookmark.classList.remove('active-icon')
    iconcreate.classList.remove('active-icon')
    iconprofile.classList.remove('active-icon')
  })

  iconbookmark.addEventListener('click', () => {
    pagehome.hidden = true
    pagebookmark.hidden = false
    pagecreate.hidden = true
    pageprofile.hidden = true

    iconhome.classList.remove('active-icon')
    iconbookmark.classList.add('active-icon')
    iconcreate.classList.remove('active-icon')
    iconprofile.classList.remove('active-icon')
  })

  iconcreate.addEventListener('click', () => {
    pagehome.hidden = true
    pagebookmark.hidden = true
    pagecreate.hidden = false
    pageprofile.hidden = true

    iconhome.classList.remove('active-icon')
    iconbookmark.classList.remove('active-icon')
    iconcreate.classList.add('active-icon')
    iconprofile.classList.remove('active-icon')
  })

  iconprofile.addEventListener('click', () => {
    pagehome.hidden = true
    pagebookmark.hidden = true
    pagecreate.hidden = true
    pageprofile.hidden = false

    iconhome.classList.remove('active-icon')
    iconbookmark.classList.remove('active-icon')
    iconcreate.classList.remove('active-icon')
    iconprofile.classList.add('active-icon')
  })
}
