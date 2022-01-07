import Link from "next/link"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import DateIcon from "../icons/date-icon"
import Button from "../ui/button"
import classes from './event-item.module.css'

const EventItem = ({title, image, date, location, id}) => {

   const transform_date = new Date(date).toLocaleDateString('en-US',{
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   })
   const formatted_address = location.replace(', ', '\n')
   const explor_link = `/events/${id}`

   return (
      <li className={classes.item}>
         <img src={image} alt={title} />
         <div className={classes.content}>
            <div className={classes.summary}>
               <h2>{title}</h2>
               <div className={classes.date}>
                  <DateIcon/>
                  <time>{transform_date}</time>
               </div>
               <div className={classes.address}>
                  <AddressIcon/>
                  <address>{formatted_address}</address>
               </div>
            </div>
            <div className={classes.actions}>
               <Button link={explor_link}>
                  <span><ArrowRightIcon/></span>
                  Explore Event
               </Button>
            </div>
         </div>
      </li>
   )
}

export default EventItem
