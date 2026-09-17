const MATOMO_URL = 'https://stats.baptistegarcia.com/'
const SITE_ID = 1

export function initMatomo() {
  window._paq = window._paq || []
  window._paq.push(['enableLinkTracking'])
  window._paq.push(['trackPageView'])
  window._paq.push(['setTrackerUrl', MATOMO_URL + 'matomo.php'])
  window._paq.push(['setSiteId', SITE_ID])

  const doc = document
  const script = doc.createElement('script')
  const firstScript = doc.getElementsByTagName('script')[0]
  script.async = true
  script.src = MATOMO_URL + 'matomo.js'
  firstScript.parentNode.insertBefore(script, firstScript)
}

export function trackEvent(category, action, name) {
  if (window._paq) {
    window._paq.push(['trackEvent', category, action, name])
  }
}
