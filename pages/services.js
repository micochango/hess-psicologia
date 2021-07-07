import Image from 'next/image'
import styles from '../styles/Layout.module.css'

const services = () => {
    return (
    <>
        <div className={`${styles.bgOrangePeel} ${styles.container}`}>
            <h1>Servicios</h1>
            <div className={styles.main}>
            <h2>Terapia familiar</h2>
            < Image
            src="/images/smiley-face.png" 
            alt="Harvey Ball's smiley face"
            height={144}
            width={144}
            />
            <p className={styles.p4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Omnis             earum provident, non voluptatem quas tempora id  voluptates?            Architecto facilis expedita temporibus minus   consequatur          laboriosam quod minima velit odit saepe amet optio  accusamus          voluptates nihil neque doloremque non, tempore eius  deleniti           ratione illum? Laudantium esse vitae recusandae   voluptas,        eligendi unde quidem.
            </p>
            </div>
            
            <div className={styles.main}>
            <h2>Terapia para parejas</h2>
            < Image
            src="/images/smiley-face.png" 
            alt="Harvey Ball's smiley face"
            height={144}
            width={144}
            />
            <p className={styles.p4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Omnis            earum provident, non voluptatem quas tempora id  voluptates?            Architectofacilis expedita temporibus minus   consequatur          laboriosam quod minimavelit odit saepe amet optio  accusamus          voluptates nihil neque doloremquenon, tempore eius  deleniti           ratione illum? Laudantium esse vitaerecusandae   voluptas,        eligendi unde quidem.
            </p>
            </div>

            <div className={styles.main}>
            <h2>Psicometría</h2>
            < Image
            src="/images/smiley-face.png" 
            alt="Harvey Ball's smiley face"
            height={144}
            width={144}
            />
            <p className={styles.p4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Omnis            earum provident, non voluptatem quas tempora id  voluptates?            Architectofacilis expedita temporibus minus   consequatur          laboriosam quod minimavelit odit saepe amet optio  accusamus          voluptates nihil neque doloremquenon, tempore eius  deleniti           ratione illum? Laudantium esse vitaerecusandae   voluptas,        eligendi unde quidem.
            </p>
        </div>
    </div>    
    </>     
    )
}

export default services