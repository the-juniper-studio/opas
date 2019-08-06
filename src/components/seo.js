import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title, keywords }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en-gb`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string
}

export default SEO
