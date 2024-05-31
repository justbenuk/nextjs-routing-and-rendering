import Image from "next/image"
import { newsItems } from "@/data/newsItems"
import { notFound } from "next/navigation"

export default function ImagePage({params}){

  //get the post slug from the params
const newsItemSlug = params.slug

  //search the file for the relevent post
  const newsItem = newsItems.find((newsItem) => newsItem.slug === newsItemSlug)

  //check if we return an image
  if(!newsItem){
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={1200} height={1200}/>
    </div>
  )
}
