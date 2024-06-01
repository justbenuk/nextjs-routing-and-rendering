import ImageModel from "@/components/model/model"
import { getNewsItem } from "@/lib/news"
export default async function ImagePage({ params }) {

  //get the post slug from the params
  const newsItemSlug = params.slug
  const newsItem = await getNewsItem(newsItemSlug)
  return <ImageModel newsItem={newsItem} />
}
