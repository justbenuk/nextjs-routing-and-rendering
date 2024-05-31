import NavLInk from "./nav-link"
import Link from "next/link"
export default function Header() {

  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href='/'>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li><NavLInk href='/news'>News</NavLInk></li>
          <li><NavLInk href='/archive'>Archive</NavLInk></li>
        </ul>
      </nav>
    </header>
  )
}
