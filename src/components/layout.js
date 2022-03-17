import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar"
import BlogHeader from "./BlogHeader/BlogHeader"
import Footer from "./Footer/Footer"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="navbar-blogheader">
        <Navbar/>
        <BlogHeader/>
        <div className="card-wrapper">
        </div>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return ( 
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
        <main>{children}</main>
      <StaticImage class="pages" src={`../../content/pages/Pages.png`}></StaticImage>
      <Footer className="footer"/>
    </div>
  )
}

export default Layout
