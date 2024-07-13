import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { MenuAvt } from '~/pages/MainPage/components/MenuAvt'
import { ModeToggle } from '~/pages/MainPage/components/mode-toggle'
import { NewsTopic, newsTopics } from '~/services/const'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const nav = useNavigate()
  const topics: NewsTopic[] = newsTopics

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const threshold = 135
      setIsScrolled(scrollTop > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearch = (event: any) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      nav(`tim-kiem/?q=${query}`)
    }
  }

  return (
    <header className='page-header'>
      {/* Top Info  */}
      <div className=" py-2">
        <div className='container'>
          <div className=" flex items-center mx-[120px]">
            <div id="today" className="flex items-center text-sm text-gray-700 mr-2">
              <i className="ic-calendar mr-2"></i>Thứ Ba, 14/05/2024 - 16:21
            </div>
            <div className="flex items-center text-sm text-gray-700 ">
              <FontAwesomeIcon icon={faPhone} />
              <span className="fa-solid fa-phone mr-2"></span>Đường dây nóng: <strong className="text-[#c31e40] mr-2">096.733.5089</strong>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="icon icon-mail mr-2"></span>Email: <a href="mailto:gdtddientu@gmail.com" className="text-blue-600 hover:underline">gdtddientu@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Header  */}
      <div className="py-4">
        <div className='container'>
          <div className="mx-[120px] flex justify-between items-center">
            <ModeToggle />
            <a href={"/"}>
              <img
                src={logo}
                alt="logo"
                width={160}
                className='mx-[40px] hover:cursor-pointer'
              />
            </a>
            <div className="relative flex flex-row">
              <input
                type="text"
                className="form-control txtsearch border border-gray-300 rounded-full py-2 px-4"
                placeholder="Tìm kiếm..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <MenuAvt/>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className={`bg-[#c31e40] text-[14px] font-bold text-[white] top-0 w-full z-50 ${isScrolled ? 'fixed' : ''}`}>
        <div className='container'>
          <div className="mx-[120px] px-[12px]">
            <ul className="flex items-center justify-between space-x-4">
              <a href={'/'} className='bg-[#24232333] px-[11px] py-[9px]'>
                <FontAwesomeIcon icon={faHouseChimney} />
              </a>
              {topics.map((topic, index) => (
                <li key={index} className="menu-item relative group py-[9px] hover:text-[#F7CE1A] hover:cursor-pointer">
                  <a href={topic.link} className="menu-link" title="Giáo dục">{topic.name}</a>
                  <ul className="sub-menu z-10 text-[15px] absolute top-[39px] hidden group-hover:block pl-[10px] pr-[20px] py-[5px] bg-white text-[#242424] [box-shadow:3px_3px_3px_rgba(0,_0,_0,_.25)]">
                    {topic.subTopics?.map((subTopic, index) => (
                      <li key={index} className="sub-item min-w-max">
                        <a href={subTopic.link} className="block px-4 py-2 hover:text-primaryColor" title="Chính sách">{subTopic.name}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header >
  )
}
