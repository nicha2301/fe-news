import { useEffect, useState } from "react";
import axios from 'axios';
import cheerio from 'cheerio';
import { BeatLoader } from 'react-spinners';
import DOMPurify from "dompurify";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share'
import { Helmet } from "react-helmet";
const cssContent = `
.article>* {
  margin-bottom: 16px
}

.article p {
  margin-top: 16px
}

.article p>img {
  width: 100%
}

.article img {
  max-width: 100%;
  height: auto
}

.article table.picture {
  width: auto;
  color: #888 !important;
  font-weight: 400;
  margin: 0 auto;
  margin-top: 16px;
  max-width: 100%
}

.article table.picture .pic {
  position: relative;
  display: block;
  padding: 0
}

.article table.picture .pic img {
  max-width: 100%;
  height: auto;
  display: flex;
  margin: 0 auto
}

.article table.picture .pic .play {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .8);
  width: 80px;
  height: 80px;
  display: block
}

.article table.picture .pic .play i {
  font-size: 30px;
  line-height: 48px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.article table.picture .caption {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #343a40;
  display: block;
  text-align: center;
  background: #e6e6e6;
  padding: 10px 15px;
  margin-top: -1px
}

.article table.picture .caption>:first-child {
  margin-top: 0
}

.article table.picture[align=left] {
  width: 297px !important;
  float: left;
  margin-right: 32px;
  margin-top: 1.6rem !important;
  margin-right: 1.6rem !important
}

.article table.picture[align=left] .caption {
  text-align: left
}

.article table.picture[align=right] {
  width: 297px !important;
  float: right;
  margin-left: 32px;
  margin-top: 1.6rem !important;
  margin-left: 1.6rem !important
}

.article table.picture[align=right] .caption {
  text-align: left
}

.article table.picture.full-width {
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%)
}

.article table.picture.full-width .caption,
.article table.picture.full-width .fig {
  text-align: center;
  font-weight: 400;
  font-style: italic;
  width: 100%;
  margin: 0 auto
}

.article table.full-video {
  margin: 1.6rem auto 0;
  max-width: initial;
  text-align: center;
  max-width: 100%;
  width: 1300px
}

.article table.full-video img {
  max-width: 100%
}

.article table.full-video .caption,
.article table.full-video .fig {
  text-align: center;
  font-weight: 400;
  font-style: italic;
  margin: 0 auto;
  font-size: 16px;
  line-height: 20px;
  color: #343a40;
  display: block
}

.article .photo img {
  max-width: 100%
}

.article table.video {
  margin: 1.6rem auto 0;
  max-width: 100%
}

.article table.video video {
  max-width: 100%
}

.article table.video .caption {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #343a40;
  display: block;
  text-align: center;
  background: #e6e6e6;
  padding: 10px 15px;
  margin-top: -1px
}

.article table.video .caption p {
  margin: .8rem auto 0
}

.article table.video .caption p:first-child {
  margin-top: 0
}

.article table:not([class]) {
  width: 100% !important
}

.article table:not([class]) td,
.article table:not([class]) th {
  padding: 10px;
  border: 1px solid #e9ecef
}

.article .notebox {
  background: #fffbf1;
  border: 1px solid #ff7d00;
  padding: 10px;
  text-align: left;
  margin-top: 1.6rem !important;
  overflow: auto
}

.article .notebox .heading {
  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  text-transform: capitalize;
  text-align: left;
  padding: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, .1);
  margin-bottom: 8px !important
}

.article .notebox p {
  font-weight: 400;
  font-size: 17px;
  line-height: 165%
}

.article .notebox p:first-child {
  margin-top: 0
}

.article .notebox p+table {
  margin-top: 20px
}

.article .notebox table.picture {
  margin-bottom: 1.6rem
}

.article .notebox table.picture[align=left] {
  margin-left: initial
}

.article .notebox table.picture[align=right] {
  margin-right: initial
}

.article .notebox table.picture[align=center] {
  max-width: 100%
}

.article .notebox table.picture.full-width {
  width: 100%;
  max-width: initial
}

.article .notebox[align=left] {
  float: left;
  margin-right: 32px
}

.article .notebox[align=right] {
  float: right;
  margin-left: 32px
}

.article .notebox[align=left],
.article .notebox[align=right] {
  width: 330px
}

.article .notebox[align=left] table.picture.full-width,
.article .notebox[align=left] table.picture[align=center],
.article .notebox[align=left] table.picture[align=left],
.article .notebox[align=left] table.picture[align=right],
.article .notebox[align=right] table.picture.full-width,
.article .notebox[align=right] table.picture[align=center],
.article .notebox[align=right] table.picture[align=left],
.article .notebox[align=right] table.picture[align=right] {
  width: 100%
}

.article .notebox .caption {
  background: #fffbf1 !important
}

.article__sub-title {
  font-size: 14px;
  font-weight: 600;
  color: #343a40;
  text-transform: uppercase
}

.article__title {
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  margin-bottom: 8px !important;
  color: #4E4E4E;
}

.article__title .icon-live {
  width: 61px !important;
  height: 21px;
  vertical-align: top;
  margin-top: 5px;
  background: url(../img/icon-live.gif) center top 0/61px 21px no-repeat
}

.article__subtitle {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #c31e40;
  text-transform: uppercase
}

.article__meta {
  display: flex;
  align-items: center;
  padding: 4px 0;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede
}

.article__meta .social-share.article__share {
  margin: 0;
  height: auto
}

.article__meta .time {
  font-size: 14px;
  color: #9e9e9e;
  margin-left: auto;
  display: block
}

.article__meta .author {
  font-weight: 600;
  font-size: 14px
}

.article__meta .author+.author:before {
  content: "-";
  display: inline-block;
  color: #999;
  font-weight: 400;
  padding: 0 8px
}

.article .verticle-menu {
  position: fixed;
  width: 40px;
  left: calc(50% - 700px);
  top: 200px;
  flex-direction: column;
  display: none;
  z-index: 10
}

@media (max-width: 1365.98px) {
  .article .verticle-menu {
    left: calc(50% - 678px)
  }
}

.article .verticle-menu>* {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .8rem;
  background-color: #cfcfcf;
  border-radius: 50%
}

.article .verticle-menu>:hover {
  background-color: #c31e40
}

.article .verticle-menu i {
  font-size: 20px;
  color: #fff
}

.article .verticle-menu .zalo {
  background-color: transparent
}

.article .verticle-menu.sticky-aside {
  display: flex
}

.article .verticle-menu.sticky-aside .facebook:hover {
  background-color: #3b5998
}

.article .verticle-menu.sticky-aside .twitter:hover {
  background-color: #00acee
}

.article .verticle-menu.sticky-aside .zalo i {
  filter: grayscale(100%);
  opacity: .4
}

.article .verticle-menu.sticky-aside .zalo:hover i {
  opacity: 1;
  filter: grayscale(0)
}

.article .verticle-menu.sticky-aside .print:hover {
  background: #888
}

.article .social-share {
  margin-left: auto
}

.article .social-share .fb-wrap {
  height: 20px;
  overflow: hidden
}

.article .social-btn-group {
  display: flex;
  justify-content: space-between
}

.article .social-btn-group>a {
  width: calc(50% - 5px);
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center
}

.article .social-btn-group .facebook {
  background-color: #3c5898;
  color: #fff
}

.article .social-btn-group .facebook i {
  font-size: 20px
}

.article .social-btn-group .facebook:hover {
  background-color: #2e4373
}

.article .social-btn-group .twitter {
  background-color: #00acee;
  color: #fff
}

.article .social-btn-group .twitter i {
  font-size: 20px
}

.article .social-btn-group .twitter:hover {
  background-color: #0087bb
}

.article .social-btn-group .zalo {
  background-color: #018fe5
}

.article .social-btn-group .zalo i {
  transform: scale(.7)
}

.article .social-btn-group .zalo:hover {
  background-color: #016fb2
}

.article__sapo {
  color: #363636;
  font-size: 18px;
  font-weight: 600
}

.article__avatar {
  margin-top: 3.2rem;
  text-align: center;
  width: 100%
}

.article__avatar .pic img {
  max-width: 100%;
  height: auto
}

.article__avatar .caption {
  padding-top: .8rem;
  font-size: 16px;
  font-style: italic;
  color: #888;
  padding-left: 25px;
  padding-right: 25px
}

.article__avatar hr {
  width: 50px
}

.article__table table.table {
  border: 1px solid #e9ecef
}

.article__table table.table td {
  border: 1px solid #e9ecef
}

.article__source {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end
}

.article__tag {
  margin-top: 16px;
  position: relative;
  background: url("/src/assets/img/icon-key.png") left top -5px/138px no-repeat
}

.article__tag .box-content {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  padding-left: 165px
}

.article__tag .box-content a {
  background: #fff;
  border-radius: 25px;
  margin-bottom: 16px;
  margin-right: 16px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  height: 32px;
  display: flex;
  align-items: center
}

.article__tag .box-content a:hover {
  color: #c31e40
}

.article__most-read {
  margin-top: 1.6rem;
  border: 1px solid #444;
  padding: 1.6rem;
  padding-top: 1.2rem
}

.article__most-read .box-heading {
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600
}

.article__most-read .story {
  margin-top: 1.6rem;
  padding-top: 1.6rem;
  border-top: 1px dashed #cbd3da
}

.article__most-read .story__thumb {
  width: 80px;
  height: 60px
}

.article__most-read .story__summary {
  margin-top: .8rem
}

.article__most-read .story__cate a {
  font-size: 1.2rem;
  color: #555;
  color: #555
}

.article__most-read .story__heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: .4rem
}

.article__most-read .story:first-child {
  margin-top: 0;
  border-top: 8px solid #c31e40;
  padding-top: 1.6rem
}

.article__relate {
  background: #fff;
  width: 100%;
  overflow: auto
}

.article__relate__thumb {
  width: 300px;
  height: 194px;
  float: left;
  margin-right: 20px
}

.article__relate__thumb a {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform .5s ease-out .1s
}

.article__relate__thumb img {
  width: 100%;
  object-fit: cover;
  margin: initial
}

.article__relate__heading a {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #404040 !important
}

.article__relate__heading a:hover {
  color: #c31e40 !important
}

.article__relate__meta a {
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #bd1723
}

.article .poll-box {
  font-style: italic;
  font-weight: 600;
  font-size: 17px;
  line-height: 165%;
  color: #c31e40;
  padding: 25px 23px 22px;
  text-align: left;
  margin-bottom: 16px;
  margin-left: 6px;
  border: 2px solid #dc3545;
  border-radius: 10px;
  width: 100%
}

.article .poll-box[align=right] {
  float: right;
  position: relative;
  margin-right: 8px;
  width: 297px;
  margin-left: 32px
}

.article .poll-box[align=left] {
  margin-left: 6px;
  float: left;
  position: relative;
  width: 297px;
  margin-right: 32px
}

.article .poll-box .box-heading span {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: #c31e40
}

.article .poll-box .box-content {
  margin-top: 8px;
  font-style: normal
}

.article .poll-box .box-content .desc {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #343a40;
  margin-bottom: 19px
}

.article .poll-box .box-content label {
  display: flex;
  align-items: center;
  cursor: pointer
}

.article .poll-box .box-content label span {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #c31e40;
  margin-left: 12px
}

.article .poll-box .wrap-button {
  margin-top: 20px
}

.article .poll-box .wrap-button .btn-send {
  background: #c31e40;
  border-radius: 3px;
  width: 100px;
  height: 28px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #fff
}

.article .poll-box .wrap-button .btn-see {
  margin-top: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #495057
}

.article .article__relate-2,
.article .social-btn-group,
.article blockquote,
.article__author,
.article__interview,
.article__live,
.article__notice,
.article__story,
.article__table {
  margin: 2.4rem auto 1.2rem
}

.article__body>* {
  margin-top: 16px !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px
}

.article__body>:first-child {
  margin-top: 0
}

.article__body a {
  color: #c31e40
}

.article__body>h1,
.article__body>h2,
.article__body>h3,
.article__body>h4,
.article__body>h5 {
  font-weight: 600;
  font-size: 20px;
  line-height: 165%
}

.article__body img {
  max-width: 100%;
  height: auto
}

.article__body table img {
  max-width: 100%
}

.article__body #wrapperBottom>div,
.article__body #wrapperBottom>h1,
.article__body #wrapperBottom>h2,
.article__body #wrapperBottom>h3,
.article__body #wrapperBottom>h4,
.article__body #wrapperBottom>h5,
.article__body #wrapperBottom>ins,
.article__body #wrapperBottom>p,
.article__body #wrapperBottom>strong,
.article__body #wrapperTop>div,
.article__body #wrapperTop>h1,
.article__body #wrapperTop>h2,
.article__body #wrapperTop>h3,
.article__body #wrapperTop>h4,
.article__body #wrapperTop>h5,
.article__body #wrapperTop>ins,
.article__body #wrapperTop>p,
.article__body #wrapperTop>strong {
  margin: 1.6rem auto 0
}

.bm-player {
  display: none;
}


.related-topic {
  background: #e9ecef;
  border: 1px solid #ddd;
  padding: 21px 30px
}

.related-topic .heading {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase
}

.related-topic .box-content {
  margin-top: 16px
}

.related-topic .story {
  margin-top: 12px
}

.related-topic .story:first-child {
  margin-top: 0
}

.related-topic .story__heading a {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #343a40;
  padding-left: 20px;
  position: relative
}

.related-topic .story__heading a::before {
  position: absolute;
  left: 0;
  content: "";
  width: 6px;
  height: 6px;
  background: #495057;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%
}

.related-news {
  background: #fff;
  border: 1px solid #ddd;
  padding: 24px 33px 33px;
  margin-top: 16px
}

.related-news .heading {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: #c31e40;
  pointer-events: none
}

.related-news .box-content {
  margin-top: 16px
}

.related-news .story {
  margin-top: 12px
}

.related-news .story:first-child {
  margin-top: 0
}

.related-news .story__heading a {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #343a40;
  padding-left: 20px;
  position: relative
}

.related-news .story__heading a::before {
  position: absolute;
  content: "";
  left: 0;
  width: 6px;
  height: 6px;
  background: #e9ecef;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%)
}


.box-think {
  background-color: #ececec;
  border-radius: 3px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .1);
  padding: 10px
}

.box-think .heading {
  border-left: 6px solid #c31e40;
  color: #c31e40;
  font-size: 20px;
  font-weight: 900;
  padding: 0 0 0 10px;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: block;
  width: 100%
}

.box-think .story__heading a {
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  font-weight: 600
}

.box-think .story__summary {
  font-style: italic;
  font-size: 14px;
  line-height: 22px;
  max-height: 66px;
  overflow: hidden
}

.box-social {
  margin-left: -60px;
  float: left;
  display: none;
  border: 1px solid #c7c7c7;
  border-radius: 35px;
  padding: 10px 0 !important;
  top: 55px;
  background: #fff
}

@media (min-width: 1080px) {
  .box-social {
    display: block
  }
}

@media (min-width: 1555px) {
  .box-social {
    margin-left: -88px
  }
}

.box-social>* {
  width: 41px;
  height: auto;
  min-height: 48px;
  display: block;
  margin-top: 12px;
  border: none;
  outline: 0;
  font-size: 0;
  border-top: 1px solid #ccc;
  padding-top: 12px
}

.box-social>:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none
}

.box-social .zalo {
  background: url("/src/assets/img/zalo.svg") center bottom / 25px no-repeat;
  min-height: 40px;
}

.box-social .facebook {
  background: url("/src/assets/img/fb.svg") center bottom/25px no-repeat;
  min-height: 40px
}

.box-social .comment {
  background: url("/src/assets/img/comment.png") center top 12px/34px no-repeat
}

.box-social .news {
  border-radius: 0 0 29px 29px;
  background: url("/src/assets/img/news.png") center top 12px/40px no-repeat
}

.social-follow {
  font-size: 20px;
  text-align: center;
  color: #343a40;
  font-weight: 400;
  line-height: 150%;
  width: 75%;
  margin: 0 auto
}

.social-follow a {
  font-weight: 700
}

.social-follow a:first-child {
  color: #3a589e;
  display: inline-block
}

.social-follow a:nth-child(2) {
  color: red;
  display: inline-block
}

.social-follow a:nth-child(3) {
  font-size: 0;
  width: 70px;
  height: 16px;
  display: inline-block
}
  .gg-news img{
   width: 70px;
    height: 70px;
  }

.social-follow a:hover {
  transform: scale(1.03)
}
  .zalo-share-button{
    width: 70px;
    height: 70px;
  }

.social-follow .tiktok {
  background: url(../img/tiktok.svg) center center no-repeat
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    z-index: 1
  }
}
`
export const Article: React.FC<{ url: string }> = (props) => {
  const [contents, setContents] = useState<{ selector: string, html: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const selectors = ['.box-social', '.article'];
  const pathname = window.location.href
  const [title, setTitle] = useState<any>('')
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
        const parser = new DOMParser()
        setTitle(parser.parseFromString(newContents[1].html, 'text/html').querySelector('h1')?.textContent)
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
  const handleDownload = () => {
    const sanitizedContent = DOMPurify.sanitize(contents[1].html)
    const htmlContent = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Download bài báo</title>
          <style>${cssContent}</style>
       </head>
       <body class="container">
          ${sanitizedContent}
       </body>
       </html>
    `

    const element = document.createElement('a')
    const file = new Blob([htmlContent], { type: 'text/html' })
    element.href = URL.createObjectURL(file)
    element.download = `${title }.html`
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
 }
  return (
    <>
      <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className='flex items-center gap-x-4 mb-3'>
            <FacebookShareButton url={pathname}>
               <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={pathname}>
               <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={pathname}>
               <LineIcon size={40} round />
            </LinkedinShareButton>
            <EmailShareButton url={pathname}>
               <EmailIcon size={40} round />
            </EmailShareButton>
            <TelegramShareButton url={pathname}>
               <TelegramIcon size={40} round />
            </TelegramShareButton>
         </div>
            <button  onClick={handleDownload} type="button" className="button mb-2">
  <div className="button-top">Tải về</div>
  <div className="button-bottom"></div>
  <div className="button-base"></div>

  
</button>
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
