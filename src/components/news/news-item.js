import Image from "next/image"
import Link  from "next/link"
export default function NewsItem({ newsItem }) {
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={300} height={100} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>

  )
}
