import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { format } from 'date-fns'; // import date
import { vi } from 'date-fns/locale'; // Import ngôn ngữ tiếng Việt
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { MenuAvt } from '~/pages/MainPage/components/MenuAvt';
import { ModeToggle } from '~/pages/MainPage/components/mode-toggle';
import { NewsTopic, newsTopics } from '~/services/const';
import { cities } from '~/services/const/city';
type CityType = 'Ho Chi Minh' | 'Ha Noi' | 'Da Nang' | 'Hue' | 'Can Tho' | 'Tay Ninh'

export default function Header() {
  const currentDate = format(new Date(), 'EEEE, dd/MM/yyyy', { locale: vi }) 
  const [weather, setWeather] = useState({ temp: 29 })
  const [city, setCity] = useState<CityType>('Ho Chi Minh')
  const [isScrolled, setIsScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const nav = useNavigate()
  const topics: NewsTopic[] = newsTopics
  useEffect(() => {
    const fetchWeather = async (city: CityType): Promise<void> => {
       try {
          const apiKey = '3969490f133ac0be1449ae2f365d58cf' 
          const response = await axios.get(
             `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          )
          const data = response.data
          setWeather({
             temp: data.main.temp
          })
       } catch (error) {
          console.error('Error fetching weather data:', error)
       }
    }

    fetchWeather(city)
 }, [city])
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
          <div className='flex space-x-2 items-center mr-4'>
            <span>{currentDate}</span>
            <span>|</span>
            <span>
               <select
                  className='bg-transparent border-none outline-none'
                  value={city}
                  onChange={(e) => setCity(e.target.value as CityType)}
               >
                  {cities.map((city) => (
                     <option className='bg-primary-foreground' key={city.value} value={city.value}>
                        {city.name}
                     </option>
                  ))}
               </select>
            </span>

            <div className='flex items-center gap-x-1'>
               {weather.temp}°C{' '}
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                  />
               </svg>
            </div>
            </div>
           
            <div className="flex items-center text-sm text-gray-700 ">
              <FontAwesomeIcon icon={faPhone} />
              <span className="fa-solid fa-phone mr-2"></span>Đường dây nóng: <strong className="text-[#c31e40] mx-2">096.733.5089</strong>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="icon icon-mail mr-2"></span>Email: <a href="mailto:gdtddientu@gmail.com" className="text-blue-600 hover:underline mx-2">gdtddientu@gmail.com</a>
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
              <MenuAvt />
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
                  <Link to={topic.link} className="menu-link" title="Giáo dục">{topic.name}</Link>
                  <ul className="sub-menu z-10 text-[15px] absolute top-[39px] hidden group-hover:block pl-[10px] pr-[20px] py-[5px] bg-white text-[#242424] [box-shadow:3px_3px_3px_rgba(0,_0,_0,_.25)]">
                    {topic.subTopics?.map((subTopic, index) => (
                      <li key={index} className="sub-item min-w-max">
                        <Link to={subTopic.link} className="block px-4 py-2 hover:text-primaryColor" title="Chính sách">{subTopic.name}</Link>
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
