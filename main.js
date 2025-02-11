import "/components/Smartphone.js"
import { dispatchEvent } from "./utils/events.js"

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

if (!prefersDark.matches) {
  changeTheme()
}

prefersDark.addEventListener('change', () => {
  changeTheme()
})

function changeTheme() {
  setTimeout(() => {
    dispatchEvent('theme-changed', prefersDark.matches ? 'dark-theme' : 'light-theme')
    if (prefersDark.matches) {
      document.documentElement.classList.replace('light-theme', 'dark-theme')
      document.querySelector("[name=theme-color]").setAttribute("content", "#1b1b1b")
    }
    else {
      document.documentElement.classList.replace('dark-theme', 'light-theme')
      document.querySelector("[name=theme-color]").setAttribute("content", "#dddddd")
    }
  }, 0)
}