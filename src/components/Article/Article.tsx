import { useEffect, useState } from "react";
import axios from 'axios';
import cheerio from 'cheerio';
import { BeatLoader } from 'react-spinners';

export const Article: React.FC<{ url: string }> = (props) => {
  const [contents, setContents] = useState<{ selector: string, html: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const selectors = ['.box-social', '.article'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.url);
        const html = response.data;
        const $ = cheerio.load(html);


        const newContents = selectors.map(selector => ({
          selector,
          html: $(selector).html() || ''
        }));

        setContents(newContents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.url]);

  if (loading) {
    return <BeatLoader />
  }

  return (
    <>
      {contents[1].html ?
        contents.map(({ selector, html }) => (
          <div key={selector} className={selector.replace('.', '') + ' sticky-top'} dangerouslySetInnerHTML={{ __html: html }} />
        ))
        :
        <h3 className="font-semibold text-center italic opacity-75" >Tin tức không tồn tại</h3>
      }
    </>
  );
};
