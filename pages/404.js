import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function NotFoundPage(){
    return (
        <>
            <div className={styles.error}>
                <h1>404</h1>
                 <h4>No existe la página que estás buscando.</h4>
                 <Link href='/'>Regresar al inicio</Link>
            </div>
        </>
    )
}