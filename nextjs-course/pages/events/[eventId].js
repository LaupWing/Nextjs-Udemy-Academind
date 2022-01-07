import { useRouter } from "next/router"
import EventSummary from "../../components/events/event-summary"
import { getEventById } from "../../dummy-data"

const EventDetail = () => {
   const router = useRouter()

   const event_id = router.query.eventId
   const event = getEventById(event_id)

   if(!event){
      return <p> No event found!</p>
   }
   return (
      <>
         <EventSummary/>
      </>
   )
}

export default EventDetail
