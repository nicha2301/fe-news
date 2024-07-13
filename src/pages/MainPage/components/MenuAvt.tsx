import { CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import AuthComponent from '~/Auth/AuthComp'
import { useAuth } from '~/Auth/AuthContext'
import '@coreui/coreui/dist/css/coreui.min.css'

const clientId = "305353374248-tmancapiepdhm8ghj411st7jq1ru2mp5.apps.googleusercontent.com"

export const MenuAvt = () => {
  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load("client:auth2", start)
  }, [])

  console.log(user);

  return (
    <CDropdown className='ml-2'>
      <CDropdownToggle className='border-none' split={false}><FontAwesomeIcon icon={faUser} /></CDropdownToggle>
      <CDropdownMenu className='transition-none'>
        <CDropdownItem href="#" className="custom-dropdown-item">Tin yêu thích</CDropdownItem>
        <CDropdownItem href="#" className="custom-dropdown-item">Tin đã xem</CDropdownItem>
        <CDropdownDivider />
        <AuthComponent />
      </CDropdownMenu>
    </CDropdown>
  )
}