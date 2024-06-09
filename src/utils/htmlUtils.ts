import axios from 'axios';
import cheerio from 'cheerio';

interface RSS {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string;
}

export const fetchHTMLData = async (url: string, page: number): Promise<RSS[]> => {
  try {
    const response = await axios.get(`${url}?page=${page}`);
    const html = response.data;
    console.log(html)
    const $ = cheerio.load(html);

    const articles: RSS[] = [];

    $('article.story').each((index, element) => {
      const title = $(element).find('.story__heading a').text().trim();
      const link = $(element).find('.story__heading a').attr('href') || '';
      const description = $(element).find('.story__summary').text().trim();
      const pubDate = $(element).find('.story__time').text().trim();
      const image = $(element).find('.story__thumb img').attr('data-src') || $(element).find('.story__thumb img').attr('src') || '';

      if (title && link) {
        articles.push({ title, link, description, pubDate, image });
      }
    });

    return articles;
  } catch (error) {
    console.error("Error fetching HTML data:", error);
    return [];
  }
};
