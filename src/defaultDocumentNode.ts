import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  //   return doc?.slug?.current ? `${window.location.host}/${doc.slug.current}` : window.location.host
  return doc?.slug?.current
    ? `http://localhost:3000/resource/preview?slug=${doc.slug.current}`
    : 'http://localhost:3000/resource/preview'
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            // url: `http://localhost:3000/resource/preview?slug=${slug}`,
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
