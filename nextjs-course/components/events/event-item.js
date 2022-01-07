import Link from "next/link"

const EventItem = ({title, image, date, location, id}) => {

   const transform_date = new Date(date).toLocaleDateString('en-US',{
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   })
   const formatted_address = location.replace(', ', '\n')
   const explor_link = `/events/${id}`

   return (
      <li>
         <img src={image} alt={title} />
         <div>
            <div>
               <h2>{title}</h2>
               <div>
                  <time>{transform_date}</time>
               </div>
               <div>
                  <address>{formatted_address}</address>
               </div>
            </div>
            <div>
               <Link href={explor_link}>Explore Event</Link>
            </div>
         </div>
      </li>
   )
}

export default EventItem
