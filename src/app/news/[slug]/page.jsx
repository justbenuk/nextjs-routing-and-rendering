import { notFound } from "next/navigation"
import { newsItems } from "@/data/newsItems"
import Image from "next/image"

export default function NewsUItemPage({ params }) {

  //get the slug from the params
  const newsSlug = params.slug

  //search the dummy data array for a post that matches the slug
  const newsItem = newsItems.find(newsItem => newsItem.slug === newsSlug)

  // if no post found - return the notfound page
  if(!newsItem){
    return notFound()
  }

  //if article is found return and render the article
  return (
    <article className="news-article">
      <header>
        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={300} height={100} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
