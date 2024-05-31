import Image from "next/image"
import Link from "next/link"
export default function NewsList({newsItems}) {
  return (
          <ul className='news-list'>
        {newsItems.map((item) => (
        <li key={item.id}><Link href={`/news/${item.slug}`}>
            <Image src={`/images/news/${item.image}`} alt={item.title}  width={300} height={300}/>
            <span>{item.title}</span>
          </Link></li>
        ))}
      </ul>

  )
}
