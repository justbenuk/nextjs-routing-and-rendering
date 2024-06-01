import { notFound } from "next/navigation"
import NewsItem from "@/components/news/news-item"
import { getNewsItem } from "@/lib/news"

export default async function NewsUItemPage({ params }) {

  //get the slug from the params
  const newsSlug = params.slug
  const newsItem = await getNewsItem(newsSlug)

  // if no post found - return the notfound page
  if (!newsItem) {
    return notFound()
  }

  //if article is found return and render the article
  return <NewsItem newsItem={newsItem} />
}
