import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div>
    <Link>
      <h3 to="/">{siteTitle}</h3>
    </Link>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/blog/">blog</Link>
      </li>
      <li>
        <Link to="/photos/">photos</Link>
      </li>
    </ul>
  </div>
)

export default Header
