import data from './data.json' assert { type: 'json' }
import { getDaysUntilBirthday, getBentosData } from './logic'
import Bento from './component/Bento'

const $app = document.querySelector('#app')

const daysUntilBirthday = getDaysUntilBirthday(data.dateOfBirth)

const bentosData = getBentosData(data, daysUntilBirthday)

$app.innerHTML = bentosData
  .map((bento) => {
    if (Array.isArray(bento)) {
      return `
      <div class="container">
        ${bento.map((b) => Bento(b)).join('')}
      </div>
    `
    }

    return Bento(bento)
  })
  .join('')
