import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'

export default function Home() {
   const featerdEvents = getFeaturedEvents()
   
   return (
      <div className={styles.container}>
         <h1>Hello Next world</h1>
      </div>
   )
}
