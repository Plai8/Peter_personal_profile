export const useScrollTo  =  () => {
const scrollTo =  (target: string) => {
    const el = document?.querySelector(target)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 114
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
  return scrollTo
}