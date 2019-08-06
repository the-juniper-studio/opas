import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, keywords, lang, title }) {

  return (
    <Helmet>
      <html lang={lang} />
      <title itemProp="name" lang={lang}>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en-gb`,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
