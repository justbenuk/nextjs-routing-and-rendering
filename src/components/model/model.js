'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'
export default function ImageModel({ newsItem }) {
  const router = useRouter()
  return (
    <>
      <div className="model-backdrop" onClick={router.back}>
        <dialog className="model" open>
          <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={800} height={800} />
          </div>
        </dialog>
      </div>
    </>
  )
}
