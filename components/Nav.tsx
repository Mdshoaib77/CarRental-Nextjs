import { LINKS } from '@/constants'
import { Link } from 'react-scroll'

const Nav = ({containerStyles, linkStyles}: navProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {LINKSi.map((link) => (
        <Link
        key={link.title}
        to={link.path}
        spy={true}
        smooth={true}
        offset={link.offset}
        duration={500}
        activeClass='active'
        className={`${linkStyles}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

type navProps = {
  containerStyles: string;
  linkStyles: string;
}

export default Nav
