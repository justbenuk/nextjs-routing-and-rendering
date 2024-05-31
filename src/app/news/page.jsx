import { newsItems } from "@/data/newsItems"
import NewsList from "@/components/news/news-list"
export default function NewsPage() {

  return (
    <main>
      <h1>News Page</h1>
      <NewsList newsItems={newsItems} />
    </main>
  )
}
