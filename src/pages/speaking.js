/** @jsx h */
import { h } from 'preact'
import Speaking from '../../speaking.js'
import SEO from '../components/seo/index.js'
import { SiteConfig } from '../site-config.js'

export default function SpeakingPage() {
  const {
    siteTitle,
    siteDescription,
    siteLastBuildDate,
    siteUrl,
    siteAuthorName,
    siteTwitter,
    siteLanguage,
    siteLocale,
  } = SiteConfig

  return (
    <div>
      <SEO
        title={siteTitle}
        titleTemplate={`scottspence.com`}
        description={siteDescription || 'nothin’'}
        image={`image`}
        pathname={`${siteUrl}/speaking/`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={siteTwitter}
      />
      <Speaking />
    </div>
  )
}
