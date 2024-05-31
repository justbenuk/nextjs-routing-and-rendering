import Link from "next/link"
import { newsItems } from "@/data/newsItems"
import Image from "next/image"
export default function NewsPage() {
  
  return (
    <main>
      <h1>News Page</h1>
      <ul className='news-list'>
        {newsItems.map((item) => (
        <li key={item.id}><Link href={`/news/${item.slug}`}>
            <Image src={`/images/news/${item.image}`} alt={item.title}  width={300} height={300}/>
            <span>{item.title}</span>
          </Link></li>
        ))}
      </ul>
    </main>
  )
}
