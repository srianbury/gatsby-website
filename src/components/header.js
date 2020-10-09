import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div>
    <h3>{siteTitle}</h3>
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
