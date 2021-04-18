/** @jsx h */
import { Fragment, h } from 'preact'
import NowCopy from '../../now-copy.js'
import SEO from '../components/seo/index.js'
import { SiteMetadata } from '../site-config.js'

export default function Now() {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteMetadata

  return (
    <Fragment>
      <SEO
        title="What I'm doing now"
        titleTemplate={siteTitle}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/now/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <NowCopy />
    </Fragment>
  )
}
