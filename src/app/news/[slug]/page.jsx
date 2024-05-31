import { notFound } from "next/navigation"
import { newsItems } from "@/data/newsItems"
import NewsItem from "@/components/news/news-item"

export default function NewsUItemPage({ params }) {

  //get the slug from the params
  const newsSlug = params.slug

  //search the dummy data array for a post that matches the slug
  const newsItem = newsItems.find(newsItem => newsItem.slug === newsSlug)

  // if no post found - return the notfound page
  if (!newsItem) {
    return notFound()
  }

  //if article is found return and render the article
  return <NewsItem newsItem={newsItem} />
}
