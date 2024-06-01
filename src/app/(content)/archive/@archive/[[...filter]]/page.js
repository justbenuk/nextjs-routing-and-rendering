import NewsList from "@/components/news/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

async function FilteredNews({ year, month }) {
  let news
  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }
  //defaulkt fallback just incase there is now news for the period selected
  let newsContent = <p>No News found for the selected period</p>

  if (news && news.length > 0) {
    newsContent = <NewsList newsItems={news} />
  }

  return newsContent
}

export default async function FilteredNewsPage({ params }) {

  //get the page route from the filter
  const filter = params.filter

  //get the fileterd params
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  // structure the resuls based on the filer
  const availableYears = await getAvailableNewsYears()
  let links = availableYears

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear)
  }

  // get the news for the month and year
  if (selectedYear && selectedMonth) {
    links = []

  }




  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
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
      <FilteredNews year={selectedYear} month={selectedMonth} />
    </>
  )
}
