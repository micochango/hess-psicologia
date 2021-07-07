import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Inicio</Link>
                </li>
                <li>
                    <Link href='/services'>Servicios</Link>
                </li>
                <li>
                    <Link href='/about'>Acerca de mí</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/contact'>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav