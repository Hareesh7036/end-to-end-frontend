import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/Header'
import Footer from '@/Footer'
import Login from '@/Login'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
  <div className={`${styles.mainContainer}`}>
      <div className={`${styles.head}`}>
      <Header/>
      </div>
      <div>
      <Login/>
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>

    </div>
  )
}
