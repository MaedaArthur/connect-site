import { siteConfig } from '@/config/site'

export function getCtaProps() {
  if (siteConfig.event.registrationsOpen) {
    return {
      label: 'Inscrever agora',
      href: siteConfig.event.registrationsUrl,
      active: true,
    }
  }
  return {
    label: siteConfig.hero.ctaPrimary,
    href: undefined,
    active: false,
  }
}
