import getData from './getData.js'

const loader = document.querySelector('.progress')
const resultBlock = document.getElementById('result')
const fetchBtn = document.getElementById('btn')

fetchBtn.addEventListener('click', async () => {
  loader.style.display = 'block'
  await getData()
  resultBlock.style.display = 'block'
  loader.style.display = 'none'
})

