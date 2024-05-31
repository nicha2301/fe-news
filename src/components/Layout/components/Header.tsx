import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { ModeToggle } from '~/pages/MainPage/components/mode-toggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const handleSearch = (event: any) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      nav(`tim-kiem/?q=${query}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 135;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="page-header">
      {/* Top Info  */}
      <div className=" py-2">
        <div className='container'>
          <div className=" flex items-center justify-center md:flex-nowrap flex-wrap">
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
          <div className="flex justify-center items-center sm:flex-nowrap flex-wrap gap-4">
      <ModeToggle/>
           <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              width={160}
              className='mx-[40px] hover:cursor-pointer'
            />
           </Link>
            <div className="relative flex flex-row">
              <input
                type="text"
                className="form-control txtsearch border border-gray-300 rounded-full py-2 px-4"
                placeholder="Tìm kiếm..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <Link to={"/"}>
                <img
                  src={"https://static-cms-giaoducthoidai.epicdn.me/v1/web/styles/img/gdtd.png"}
                  alt="logo"
                  width={76}
                  className='h-[26px] mt-2 ml-8 hover:cursor-pointer'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className={`bg-[#c31e40] text-[15px] font-bold text-[white] top-0 w-full z-50 ${isScrolled ? 'fixed' : ''}`}>
        <div className='container'>
          <div className="px-[12px]">
            <ul className="flex items-center space-x-4">
              <div className='bg-[#24232333] px-[11px] py-[9px]'>
                <FontAwesomeIcon icon={faHouseChimney} />
              </div>
              <li className="menu-item relative group">
                <a href="https://giaoducthoidai.vn/giao-duc/" className="menu-link" title="Giáo dục">Giáo dục</a>
                <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg text-[black]">
                  <li className="sub-item">
                    <a href="https://giaoducthoidai.vn/chinh-sach/" className="block px-4 py-2 hover:bg-gray-100" title="Chính sách">Chính sách</a>
                  </li>
                  <li className="sub-item">
                    <a href="https://giaoducthoidai.vn/dia-phuong/" className="block px-4 py-2 hover:bg-gray-100" title="Địa phương">Địa phương</a>
                  </li>
                  <li className="sub-item">
                    <a href="https://giaoducthoidai.vn/tuyen-sinh-du-hoc/" className="block px-4 py-2 hover:bg-gray-100" title="Đào tạo - Tuyển sinh">Đào tạo - Tuyển sinh</a>
                  </li>
                  <li className="sub-item">
                    <a href="https://giaoducthoidai.vn/giao-duc-bon-phuong/" className="block px-4 py-2 hover:bg-gray-100" title="Bốn phương">Bốn phương</a>
                  </li>
                  <li className="sub-item">
                    <a href="https://giaoducthoidai.vn/chuyen-dong/" className="block px-4 py-2 hover:bg-gray-100" title="Chuyển động">Chuyển động</a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
