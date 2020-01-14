import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import headerStyles from './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div>
        <h1>
          <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to='about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
          </li>
          <li>
            <Link to='projects' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Projects</Link>
          </li>
          <li>
            <Link to='contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header
