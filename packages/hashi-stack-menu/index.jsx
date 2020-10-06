import styles from './hashi-stack-menu.module.css'
import { useEffect, useState } from 'react'
import InlineSvg from '@hashicorp/react-inline-svg'
import LogoSvg from './assets/logo.svg?include'
import NavItem from './nav-item'
import slugify from 'slugify'
import Link from 'next/link'
import HASHI_STACK_MENU_ITEMS from './data'

export default function HashiStackMenu({ onPanelChange }) {
  const [activePanelKey, setActivePanelKey] = useState('')
  const isActive = (a) => activePanelKey === a

  useEffect(() => {
    if (onPanelChange) {
      onPanelChange(activePanelKey)
    }
  }, [activePanelKey])

  return (
    <header className={styles.hashiStackMenu}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logoLink}>
            <Logo />
          </a>
        </Link>
        <NavMenu>
          {HASHI_STACK_MENU_ITEMS?.map((item) => (
            <NavItem
              key={slugifyToKey(item.title)}
              item={item}
              panelOpen={isActive(slugifyToKey(item.title)) || false}
              onPanelOpen={() => setActivePanelKey(slugifyToKey(item.title))}
              onPanelClose={() => setActivePanelKey('')}
            />
          ))}
        </NavMenu>
      </nav>
    </header>
  )
}

function slugifyToKey(title) {
  return slugify(title, { lower: true })
}

function NavMenu({ children }) {
  return <menu className={styles.menu}>{children}</menu>
}

function Logo() {
  return <InlineSvg src={LogoSvg} />
}