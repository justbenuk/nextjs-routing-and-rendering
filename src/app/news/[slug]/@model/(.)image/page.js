'use client'
import Image from "next/image"
import { newsItems } from "@/data/newsItems"
import { notFound, useRouter } from "next/navigation"
export default function ImagePage({ params }) {

  //init router
  const router = useRouter()

  //get the post slug from the params
  const newsItemSlug = params.slug

  //search the file for the relevent post
  const newsItem = newsItems.find((newsItem) => newsItem.slug === newsItemSlug)

  //check if we return an image
  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <div className="model-backdrop" onClick={router.back} />
      <dialog className="model" open>
        <div className="fullscreen-image">
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={800} height={800} />
        </div>
      </dialog>
    </>
  )
}
