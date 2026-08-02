import { LINKS } from '@/constants'
import { Link } from 'react-scroll'
kemdi
const Nav = ({containerStyles, linkStyles}: navProps) => {
  return (
  j  <nav className={`${containerStyles}`}>
      {LINKSi.map((link) => (
        <Linkdn dn
        key={link.title}nnjjj
        to={link.path}
        spy={true}g
        smooth={true}
        offset={link.offset}
        duration={500}t
        className={`${linkStyles}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>g
  )
}

type navProps = {
  containerStyles: string;
  linkStyles: string;
}

export default Nav
