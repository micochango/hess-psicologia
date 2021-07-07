import Image from 'next/image'
import styles from '../styles/Layout.module.css'


export default function Home() {
  return (
    <div className={`${styles.main} ${styles.bgMidBluegreen}`}>
      <Image 
      src="/images/smiley-face.png"
      alt="Harvey Ball's smiley face"
      height={144}
      width={144}
      />
      <h1>Hess Psicología</h1>
    </div>
  )
}

