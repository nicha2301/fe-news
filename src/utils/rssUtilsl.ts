import { useEffect, useState } from 'react'
import { RSS } from '../services/api/model/RSSModel'

export const RSSApi = (url: string, num?: number) => {
  const [rssItems, setRssItems] = useState<RSS[]>([])

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(url)
        const text = await response.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, 'text/xml')
        const items = xml.querySelectorAll('item')

        const extractRelevantContent = (html: string) => {
          return parser.parseFromString(html, 'text/html').querySelector('a')?.nextSibling?.textContent || ''
        }

        const rssItems: RSS[] = Array.from(items).map((item) => {
          return new RSS(
            item.querySelector('category')?.textContent || '',
            item.querySelector('title')?.textContent || '',
            item.querySelector('link')?.getAttribute('href') || '',
            extractRelevantContent(item.querySelector('description')?.textContent || ''),
            item.querySelector('image')?.textContent || '',
            item.querySelector('thumb')?.textContent || '',
            item.querySelector('pubDate')?.textContent || ''
          )
        })
        setRssItems(rssItems)
      } catch (error) {
        console.error('Error fetching RSS feed:', error)
      }
    }

    fetchRSS()
  }, [])

  return rssItems.slice(0, num === null ? 0 : num)
}
