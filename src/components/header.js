import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/">
      <h3>{siteTitle}</h3>
    </Link>
    <ul>
      <ListItem to="/" text="home" />
      <ListItem to="/blog/" text="blog" />
      <ListItem to="/photos/" text="photos" />
    </ul>
  </div>
)

const ListItem = ({ to, text }) => (
  <li className="list-item">
    <Link to={to}>{text}</Link>
  </li>
)

export default Header
