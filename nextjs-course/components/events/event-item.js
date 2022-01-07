import Link from "next/link"
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
                  <time>{transform_date}</time>
               </div>
               <div className={classes.address}>
                  <address>{formatted_address}</address>
               </div>
            </div>
            <div className={classes.action}>
               <Link href={explor_link}>Explore Event</Link>
            </div>
         </div>
      </li>
   )
}

export default EventItem
