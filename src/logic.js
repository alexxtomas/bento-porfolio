export function getDaysUntilBirthday(dateOfBirth) {
  // Fecha actual
  const currentDate = new Date()

  // [day, month, year]
  const splitDateOfBirth = dateOfBirth.split('/')
  // month/day
  const monthAndDay = `${splitDateOfBirth[1]}/${splitDateOfBirth[0]}`

  let bithdayDay = new Date(`${monthAndDay}/${currentDate.getFullYear()}`)

  if (currentDate > bithdayDay) {
    bithdayDay = new Date(`${monthAndDay}/${currentDate.getFullYear() + 1}`)
  }
  // getTime nos devuelve el tiempo en milisegundos
  const difference = currentDate.getTime() - bithdayDay.getTime()
  // Obtenemos los días totales
  const totalDays = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)))

  return totalDays
}

export function getBentosData(data, daysUntilBirthday) {
  return [
    {
      as: 'article',
      backgroundColor: '#af72ff56',
      size: 4,
      className: 'introduction',
      children: /* html */ `
      <section>
        <img src="${data.image}" alt="${data.name}" />
        <div>
          <h1>${data.name}</h1>
          <p>${data['y/o']} y/o ${data.profession}</p>
        </div>
     </section>
      `
    },
    {
      as: 'a',
      href: `mailto:${data.email}`,
      backgroundColor: '#7785ff56',
      size: 2,
      className: 'social',
      children: /* html */ `
      <img src="/icons/mail.svg" alt="Mail" />
      `
    },
    {
      as: 'a',
      href: `${data.linkedin}`,
      backgroundColor: '#49a7ff56',
      size: 2,
      className: 'social',
      children: /* html */ `
      <img src="/icons/linkedin.svg" alt="linkedin" />
      `
    },
    {
      as: 'article',
      backgroundColor: 'rgb(55 48 163)',
      size: 4,
      className: 'description',
      children: /* html */ `
      <h3>${data.about.title}</h3>
      ${data.about.content
        .map((content) => {
          return `<p>${content}</p>`
        })
        .join('')}
      `
    },
    {
      as: 'article',
      backgroundColor: '#2ab9adb9',
      size: 3,
      className: 'english-level',
      children: /* html */ `
      <h3>English Level</h3>
      <p>${data.englishLevel}</p>
      `
    },
    [
      {
        as: 'article',
        backgroundColor: '#ffad7756',
        size: 1,
        className: 'info',
        children: /* html */ `
        <h3>${new Date().toLocaleString('es-ES', {
          hour: 'numeric',
          minute: 'numeric'
        })}</h3>
        <p>in Spain</p>
        `
      },
      {
        as: 'article',
        backgroundColor: 'rgb(35 34 76)',
        size: 3,
        className: 'info brithday',
        children: /* html */ `
        <h3><span>${daysUntilBirthday}</span> days</h3>
        <p>until brithday</p>
        `
      }
    ],
    {
      as: 'article',
      backgroundColor: 'rgb(175 175 175)',
      size: 2,
      className: 'discord',
      children: /* html */ `
      <section>
        <img src="/icons/discord.svg" alt="Discord" />
        <p>${data.discord}</p>
      </section>
      `
    },
    {
      as: 'a',
      href: `${data.github}`,
      backgroundColor: '',
      size: 4,
      className: 'github',
      children: /* html */ `
      <div class="github-background"></div>
      <img alt="github gif" class="github-gif" src="/gifs/github.gif" />
      <section>
        <img src="/icons/github.svg" alt="Github" />
        <div>
          <h3>GitHub</h3>
          <p>My open source work & contributions</p>
        </div>
      </section>
      `
    },
    {
      as: 'article',
      backgroundColor: 'rgb(162 28 175)',
      size: 2,
      className: 'skills',
      defaultClass: false,
      children: /* html */ `

      ${Object.entries(data.skills)
        .map(([key, value]) => {
          return /* html */ `
        <img src="${value}" alt="${key}" />
        `
        })
        .join('')}
      `
    }
  ]
}
