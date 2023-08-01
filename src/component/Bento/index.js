import './style.css'

export default function Bento({
  as = 'a',
  children,
  size = 2,
  className = '',
  backgroundColor = '',
  target = '__blank',
  href = '#',
  rel = 'noopener noreferrer',
  defaultClass = true
}) {
  const classes = `${defaultClass && 'bento'} ${className}`

  const style = `grid-column: span ${size} / span ${size}; background-color: ${backgroundColor};`

  if (as === 'a') {
    return /* html */ `
      <a href="${href}" target="${target}" rel="${rel}" class="${classes}" style="${style}">
      ${children}
      </a>
    `
  }

  return /* html */ `
  <${as} class="${classes}" style="${style}">
  ${children}
  </${as}>
`
}
