import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'
const Elements = prismicDOM.RichText.Elements

export function HTMLSerializer(data: any[]): string {
  return prismicDOM.RichText.asHtml(data, linkResolver, HTMLSerializerHelper)
}

function HTMLSerializerHelper(
  type: any,
  element: any,
  content: any,
  children: any
) {
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<nuxt-link to="${url}">${content}</nuxt-link>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${
      element.alt || ''
    }" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<nuxt-link to="${url}">${result}</nuxt-link>`
      } else {
        const target = element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<span class="${wrapperClassList.join(' ')}">${result}</span>`
    return result
  }

  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join('')}</h1>`

    case Elements.heading2:
      return `<h2>${children.join('')}</h2>`

    case Elements.heading3:
      return `<h3>${children.join('')}</h3>`

    case Elements.heading4:
      return `<h4>${children.join('')}</h4>`

    case Elements.heading5:
      return `<h5>${children.join('')}</h5>`

    case Elements.heading6:
      return `<h6>${children.join('')}</h6>`

    case Elements.paragraph:
      return `<p>${children.join('')}</p>`

    case Elements.preformatted:
      return `<pre>${children.join('')}</pre>`

    case Elements.strong:
      return `<strong>${children.join('')}</strong>`

    case Elements.em:
      return `<em>${children.join('')}</em>`

    case Elements.listItem:
      return `<li>${children.join('')}</li>`

    case Elements.oListItem:
      return `<li>${children.join('')}</li>`

    case Elements.list:
      return `<ul>${children.join('')}</ul>`

    case Elements.oList:
      return `<ol>${children.join('')}</ol>`

    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `

    case Elements.label:
      // eslint-disable-next-line no-case-declarations
      const label = element.data.label ? ` class="${element.data.label}"` : ''
      return `<span ${label}>${children.join('')}</span>`

    case Elements.span:
      return content ? content.replace(/\n/g, '<br />') : ''

    default:
      return null
  }
}
