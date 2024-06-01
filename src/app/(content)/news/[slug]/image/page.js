import { getNewsItem } from "@/lib/news"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function ImagePage({ params }) {

  //get the post slug from the params
  const newsItemSlug = params.slug
  const newsItem = await getNewsItem(newsItemSlug)

  //check if we return an image
  if (!newsItem) {
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={1200} height={800} />
    </div>
  )
}
