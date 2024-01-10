import { triggerSignOut } from '@/app/lib/actions'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from '@nextui-org/react'
import { MdLogout } from 'react-icons/md'

const NavbarUser = () => {
  const user = {
    username: 'snail',
    role: 'admin',
    email: '123@123.com',
    avatar: '/avatar.png',
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          name={user.username}
          description={user.role}
          avatarProps={{
            isBordered: true,
            as: 'button',
            src: user?.avatar || '/no-avatar.png',
          }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Profile Actions' variant='flat'>
        <DropdownSection showDivider>
          <DropdownItem key='email' isDisabled>
            {user.email}
          </DropdownItem>
          <DropdownItem
            key='github'
            target='_blank'
            href='https://github.com/zhenyuWang'>
            GitHub
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
