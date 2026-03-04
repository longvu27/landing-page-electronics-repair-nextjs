export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const gaEvent = (eventName) => {
  if (typeof window === 'undefined') return
  if (!window.gtag) return

  window.gtag('event', eventName)
}