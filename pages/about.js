import Image from 'next/image'
import styles from '../styles/Layout.module.css'

const about = () => {
    return (
        <>
            <div className={`${styles.bgGhostWhite} ${styles.container}`}>
                <h2>Acerca de mí</h2>
                <Image
                src="/images/smiley-face.png" 
                alt="Harvey Ball's smiley face"
                height={144}
                width={144}
                />
                <p className={styles.p4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Omnis         earum provident, non voluptatem quatempora    id  voluptates?           Architecto facilis expedittemporibus    minus   consequatur           laboriosam quod minimvelit odit  saepe   amet optio  accusamus        voluptates nihineque   doloremque non,  tempore eius  deleniti        rationillum?  Laudantium esse vitae  recusandae   voluptaseligendi        unde  quidem.
                </p>
                <Image 
                src="/images/Shelly-misiones-de-paz.jpeg" 
                alt="Harvey Ball's smiley face"
                height={576}
                width={576}
                layout='intrinsic'
                />
                <p className={styles.p4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat assumenda nemo, ducimus saepe accusamus, aperiam, totam deserunt delectus consectetur quod corporis? Dolorem temporibus a corrupti esse est aliquid cum delectus, hic illum culpa, harum laborum nihil accusantium adipisci. Autem iure ratione officia perspiciatis eaque accusamus blanditiis voluptate alias nam.</p>
            </div>
        </>
    )
}

export default about