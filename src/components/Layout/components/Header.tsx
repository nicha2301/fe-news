import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { ModeToggle } from '~/pages/MainPage/components/mode-toggle'
import { paths } from '~/router/paths'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const nav = useNavigate()

  const handleSearch = (event: any) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      nav(`tim-kiem/?q=${query}`)
    }
  }

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
          <div className='flex justify-center items-center sm:flex-nowrap flex-wrap gap-4'>
            <ModeToggle />
            <Link to={'/'}>
              <img src={logo} alt='logo' width={160} className='mx-[40px] hover:cursor-pointer' />
            </Link>
            <div className='relative flex flex-row'>
              <input
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
      <nav
        className={`bg-[#c31e40] text-[15px]  font-bold text-[white] top-0 w-full z-50 ${isScrolled ? 'fixed' : ''}`}
      >
        <div className='container'>
          <div className=''>
            <ul className='flex items-center py-3 gap-x-3 gap-y-2 flex-wrap'>
              <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')} to={'/'}>
                <FontAwesomeIcon icon={faHouseChimney} />
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.education}
                title='Giáo dục'
              >
                Giáo dục
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.policy}
                title='Chính sách'
              >
                Chính sách
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.local}
                title='Địa phương'
              >
                Địa phương
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.trainingAdmission}
                title='Đào tạo - Tuyển sinh'
              >
                Đào tạo - Tuyển sinh
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.fourDirections}
                title='Bốn phương'
              >
                Bốn phương
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.movement}
                title='Chuyển động'
              >
                Chuyển động
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.news}
                title='Thời sự'
              >
                Thời sự
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.urbanEducation}
                title='Giáo dục Đô thị'
              >
                Giáo dục Đô thị
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.society}
                title='Xã hội'
              >
                Xã hội
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.politics}
                title='Chính trị'
              >
                Chính trị
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.economy}
                title='Kinh tế'
              >
                Kinh tế
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.legalEducation}
                title='Giáo dục pháp luật'
              >
                Giáo dục pháp luật
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.security}
                title='An ninh'
              >
                An ninh
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.legalSystem}
                title='Pháp đình'
              >
                Pháp đình
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.readersInvestigation}
                title='Bạn đọc - Điều tra'
              >
                Bạn đọc - Điều tra
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.connection}
                title='Kết nối'
              >
                Kết nối
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.laborUnion}
                title='Công đoàn'
              >
                Công đoàn
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.companion}
                title='Đồng hành'
              >
                Đồng hành
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.scienceTechnology}
                title='Khoa học - Công nghệ'
              >
                Khoa học - Công nghệ
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.exchange}
                title='Trao đổi'
              >
                Trao đổi
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.methodology}
                title='Phương pháp'
              >
                Phương pháp
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.expertCorner}
                title='Góc chuyên gia'
              >
                Góc chuyên gia
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.school}
                title='Học đường'
              >
                Học đường
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.skills}
                title='Kỹ năng'
              >
                Kỹ năng
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.studyAbroad}
                title='Du học'
              >
                Du học
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.faces}
                title='Gương mặt'
              >
                Gương mặt
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.physical}
                title='Thể chất'
              >
                Thể chất
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.humanity}
                title='Nhân ái'
              >
                Nhân ái
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.world}
                title='Thế giới'
              >
                Thế giới
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.nationalDefenseEducation}
                title='Giáo dục Quốc phòng'
              >
                Giáo dục Quốc phòng
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.worldIssues}
                title='Thế giới đó đây'
              >
                Thế giới đó đây
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.strangeStories}
                title='Chuyện lạ'
              >
                Chuyện lạ
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.health}
                title='Sức khỏe'
              >
                Sức khỏe
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.healthBeauty}
                title='Khoẻ đẹp'
              >
                Khoẻ đẹp
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.family}
                title='Gia đình'
              >
                Gia đình
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.covid19Prevention}
                title='Đẩy lùi Covid-19'
              >
                Đẩy lùi Covid-19
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')} to={paths.media} title='Media'>
                Media
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.infographic}
                title='Infographic'
              >
                Infographic
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')} to={paths.video} title='Video'>
                Video
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.hotNews}
                title='Nóng 247'
              >
                Nóng 247
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.highlights}
                title='Tiêu điểm'
              >
                Tiêu điểm
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.culture}
                title='Văn hóa'
              >
                Văn hóa
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.creation}
                title='Sáng tác'
              >
                Sáng tác
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.culturalLife}
                title='Đời sống văn hoá'
              >
                Đời sống văn hoá
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.celebrities}
                title='Sao'
              >
                Sao
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.sports}
                title='Thể thao'
              >
                Thể thao
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-yellow-500 transition-all')}
                to={paths.schoolSports}
                title='Thể thao học đường'
              >
                Thể thao học đường
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
