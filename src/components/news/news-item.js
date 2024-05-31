import Image from "next/image"
export default function NewsItem({newsItem}) {
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
