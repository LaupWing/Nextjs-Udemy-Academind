import fs from 'fs/promises'
import path from 'path'

export default function Home() {
   // const { products } = props

   return (
      <ul>
         <li>Product 1</li>
         <li>Product 2</li>
         <li>Product 3</li>
      </ul>
   )
}

export async function getStaticProps(){
   const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json') 
   const jsonData = await fs.readFile(filePath)
   const data = JSON.parse(jsonData)
   console.log(data)

   return {
      props: {
         products: [{id: 'p1', title: 'Product 1'}]
      }
   }
}