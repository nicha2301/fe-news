import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AuthComponent from '~/Auth/AuthComp';
import { useAuth } from '~/Auth/AuthContext';

export const MenuAvt = () => {
  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };


  return (
    <>
      <div className='w-[40px] h-[40px]'>
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="rounded-lg w-[80px] h-[40px] px-5 py-2.5 text-center inline-flex items-center" type="button">
        {!user ? (
            <FontAwesomeIcon icon={faUser} className='text-[24px] text-gray-600' />
          ) : (
            <img src={user.imageUrl} className='border rounded-full' alt="User Avatar" />
          )}
        </button>
      </div>

      <div id="dropdownHover" className="z-10 transform-none transition-none hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tin yêu thích</Link>
          </li>
          <li>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tin đã xem</Link>
          </li>
          <li>
            <Link to="#" className="block text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <AuthComponent />
            </Link>
          </li>
        </ul>
      </div>
    </>

  )
}