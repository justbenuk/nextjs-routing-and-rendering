import NewsList from "@/components/news/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {

  //get the page route from the filter
  const filter = params.filter

  //get the fileterd params
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  // structure the resuls based on the filer
  let news
  let links

  //get all available years for the original filter
  links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  // get the news for the month and year
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []

  }

  //defaulkt fallback just incase there is now news for the period selected
  let newsContent = <p>No News found for the selected period</p>

  if (news && news.length > 0) {
    newsContent = <NewsList newsItems={news} />
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) || 
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid Filter')
  }
  
  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>)
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
