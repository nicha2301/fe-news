import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { Input } from '~/components/ui/input'
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
      <div className=' py-2'>
        <div className='container'>
          <div className=' flex items-center justify-center md:flex-nowrap flex-wrap'>
            <div id='today' className='flex items-center text-sm text-gray-700 mr-2'>
              <i className='ic-calendar mr-2'></i>Thứ Ba, 14/05/2024 - 16:21
            </div>
            <div className='flex items-center text-sm text-gray-700 '>
              <FontAwesomeIcon icon={faPhone} />
              <span className='fa-solid fa-phone mr-2'></span>Đường dây nóng:{' '}
              <strong className='text-[#c31e40] mr-2'>096.733.5089</strong>
            </div>
            <div className='flex items-center text-sm text-gray-700'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className='icon icon-mail mr-2'></span>Email:{' '}
              <a href='mailto:gdtddientu@gmail.com' className='text-blue-600 hover:underline'>
                gdtddientu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Header  */}
      <div className='py-4'>
        <div className='container'>
          <div className='flex justify-center flex-wrap gap-3 items-center'>
            <ModeToggle />
            <Link to={'/'}>
              <img src={logo} alt='logo' width={160} className='mx-[40px] hover:cursor-pointer' />
            </Link>
            <div className='relative flex flex-row'>
              <Input
                type='text'
                className='form-control txtsearch border border-gray-300 rounded-full py-2 px-4'
                placeholder='Tìm kiếm...'
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
              />

              <Link to={'/'}>
                <img
                  src={'https://static-cms-giaoducthoidai.epicdn.me/v1/web/styles/img/gdtd.png'}
                  alt='logo'
                  width={76}
                  className='h-[26px] mt-2 ml-8 hover:cursor-pointer'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className={`bg-[#c31e40] text-[14px] font-bold text-[white] top-0 w-full z-50 ${isScrolled ? 'fixed' : ''}`}>
        <div className='container'>
          <div className='px-[12px]'>
            <ul className='flex items-center flex-wrap gap-x-4 gap-y-0'>
              <Link to={'/'} className='bg-[#24232333] px-[11px] py-[9px]'>
                <FontAwesomeIcon icon={faHouseChimney} />
              </Link>
              {topics.map((topic, index) => (
                <li key={index} className='menu-item relative group py-[9px] hover:text-[#F7CE1A] hover:cursor-pointer'>
                  <Link to={topic.link} className='menu-link' title='Giáo dục'>
                    {topic.name}
                  </Link>
                  <ul className='sub-menu text-[15px] absolute z-50 top-[39px] hidden group-hover:block pl-[10px] pr-[20px] py-[5px] bg-white text-[#242424] [box-shadow:3px_3px_3px_rgba(0,_0,_0,_.25)]'>
                    {topic.subTopics?.map((subTopic, index) => (
                      <li key={index} className='sub-item min-w-max'>
                        <Link to={subTopic.link} className='block px-4 py-2 hover:text-primaryColor' title='Chính sách'>
                          {subTopic.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='btn fixed z-[100] bottom-5 right-5'
        type='button'
      >
        <strong>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 18.75 7.5-7.5 7.5 7.5' />
            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 7.5-7.5 7.5 7.5' />
          </svg>
        </strong>
        <div id='container-stars'>
          <div id='stars'></div>
        </div>
        <div id='glow'>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </button>
    </header>
  )
}
