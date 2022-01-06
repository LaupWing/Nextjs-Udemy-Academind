import EventItem from "./event-item"

const EventList = (props) => {
   return (
      <ul>
         {props.items.map(item=>
            <EventItem
               name={item}
            />   
         )}
      </ul>
   )
}

export default EventList
