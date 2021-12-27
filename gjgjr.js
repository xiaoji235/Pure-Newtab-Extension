const NEED_GRAY_DATE = new Set(['9-18','12-13'])

const grayStyle = `
html{
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}
`

const styleDom = document.createElement('style')
styleDom.textContent = grayStyle

const date = new Date()
const month = date.getMonth() + 1
const day = date.getDate()
const nowDate = `${month}-${day}`

if(NEED_GRAY_DATE.has(nowDate)){
  document.head.appendChild(styleDom)
}