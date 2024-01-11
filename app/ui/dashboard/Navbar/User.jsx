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

const NavbarUser = ({ user }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          name={user.username}
          description={user.isAdmin ? 'Admin' : 'User'}
          avatarProps={{
            isBordered: true,
            as: 'button',
            src: user.img || '/no-avatar.png',
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
