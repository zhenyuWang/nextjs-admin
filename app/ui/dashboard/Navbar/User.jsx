import { triggerSignOut } from '@/app/lib/actions'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Avatar,
} from '@nextui-org/react'
import { MdLogout } from 'react-icons/md'

const NavbarUser = () => {
  const user = {
    username: 'admin',
    email: '123@123.com',
    avatar: '/avatar.png',
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as='button'
          showFallback
          name={user.username}
          className='transition-transform min-w-[40px] min-h-[40px]'
          src={user?.avatar || '/no-avatar.png'}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Profile Actions' variant='flat'>
        <DropdownSection showDivider>
          <DropdownItem key='email' isDisabled>
            {user.email}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem
          startContent={<MdLogout />}
          onClick={() => {
            triggerSignOut()
          }}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavbarUser
