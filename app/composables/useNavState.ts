import { navItems, type NavItem } from '../data/nav'

/**
 * Подсветка пункта меню: на главной — по видимой секции,
 * на внутренних страницах — по совпадению пути.
 */
export const useNavState = () => {
  const route = useRoute()
  const injected = inject('activeSection', null) as { active: Ref<string> } | null
  const activeSection = injected?.active ?? ref('')

  const isActive = (item: NavItem) => {
    const isHome = route.path === '/'
    if (item.section) return isHome && activeSection.value === item.section
    return route.path === item.to || route.path.startsWith(`${item.to}/`)
  }

  return { navItems, isActive }
}
