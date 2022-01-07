import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'

export default function Home() {
   const featured_events = getFeaturedEvents()
   
   return (
      <div className={styles.container}>
         <EventList
            items={featured_events}
         />
         <h1>Hello Next world</h1>
      </div>
   )
}
