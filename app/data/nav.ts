export interface NavItem {
  label: string
  to: string
  /** id секции главной страницы — для подсветки активного пункта */
  section?: string
}

export const navItems: NavItem[] = [
  { label: 'Услуги', to: '/#services', section: 'services' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Цены', to: '/#pricing', section: 'pricing' },
  { label: 'Вопросы', to: '/#faq', section: 'faq' },
  { label: 'О нас', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
]
