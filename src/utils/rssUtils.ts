import axios from 'axios'
import cheerio from 'cheerio'
import { useEffect, useState } from 'react'
import { RSS } from '../services/api/model/RSSModel'

const parser = new DOMParser()
export const RSSApi = (url: string, num?: number) => {
  const [rssItems, setRssItems] = useState<RSS[]>([])

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(url)
        const text = await response.text()
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
  }, [url])

  return rssItems.slice(0, num === null ? 0 : num)
}

export const SearchResults = async (url: string): Promise<RSS[]> => {
  try {
    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)
    const items = $('.story')
    const amountResultSearch = $('.search-wrapper')
    const rssItems: RSS[] = items
      .map((_, item) => {
        return new RSS(
          $(amountResultSearch).find('.search-wrapper .result').text() || '',
          $(item).find('.story__thumb a').attr('title') || '',
          $(item).find('.story__thumb a').attr('href') || '',
          $(item).find('.story__summary').text() || '',
          $(item).find('a img').attr('data-src') || '',
          $(item).find('a img').attr('data-src') || '',
          $(item).find('.story__time').text() || ''
        )
      })
      .get()

    return rssItems
  } catch (error) {
    console.error('Error fetching search results:', error)
    return []
  }

}
export const fetchHTMLData = async (url: string, page: number): Promise<RSS[]> => {
  try {
    const response = await axios.get(`${url}?page=${page}`);
    const html = response.data;
    const $ = cheerio.load(html);

    const articles: RSS[] = [];
    const category = $('div.cate-breadcrumb h1 a.cate-parent').text().trim();
    $('article.story').each((_index, element) => {
      const title = $(element).find('.story__heading a').text().trim();
      const link = $(element).find('.story__heading a').attr('href') || '';
      const description = $(element).find('.story__summary').text().trim();
      const pubDate = $(element).find('.story__time').text().trim();
      const image = $(element).find('.story__thumb img').attr('data-src') || $(element).find('.story__thumb img').attr('src') || '';

      if (title && link) {
        articles.push({ title, link, description, pubDate, image,category  });
      }
    });

    return articles;
  } catch (error) {
    console.error("Error fetching HTML data:", error);
    return [];
  }
};

export const saveArticleToLocalStorage = (article: RSS) => {
  const storedArticles = localStorage.getItem("readArticles");
  const articles = storedArticles ? JSON.parse(storedArticles) : [];

  const articleExists = articles.some((storedArticle: RSS) => storedArticle.link === article.link);
  if (!articleExists) {
    const articleData = {
      title: article.title,
      link: article.link,
      description: article.description,
      pubDate: article.pubDate,
      image: article.image,
      category: article.category,
    };

    articles.push(articleData);
    localStorage.setItem("readArticles", JSON.stringify(articles));
  }
};

export const fetchArticleData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $("meta[property='og:title']").attr("content") || $("title").text();
    const description = $("meta[property='og:description']").attr("content") || "";
    const pubDate = $("meta[property='article:published_time']").attr("content") || new Date().toISOString();
    const image = $("meta[property='og:image']").attr("content") || "";
    const category = $("meta[property='article:section']").attr("content") || "";

    const articleData: RSS = {
      title,
      link: url,
      description,
      pubDate,
      image,
      category
    };

    saveArticleToLocalStorage(articleData);
  } catch (error) {
    console.error("Error fetching article data:", error);
  }
};
