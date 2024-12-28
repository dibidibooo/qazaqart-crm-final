import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import avatar8 from '@/assets/images/users/avatar-8.jpg'

import type { ChatMsgType, ContactType, DropdownItemType, GroupType, UserContactType } from '@/views/apps/chat/components/types'


// Delete
export const chatMsg: ChatMsgType[] = [
]
export const contactList: ContactType[] = [
]
// Delete





export const groupList: GroupType[] = [
  {
    name: 'General'
  },
  {
    name: 'Company',
    badge: 33
  },
  {
    name: 'Drama Club'
  },
  {
    name: 'Unknown Friends'
  },
  {
    name: 'Family Ties',
    badge: 65
  },
  {
    name: '2Good4U'
  }
]

export const userContact: UserContactType[] = [
  {
    name: 'Gaston Lapierre',
    avatar: avatar2,
    status: ''
  },
  {
    name: 'Fantina LeBatelier',
    avatar: avatar3,
    status: '** no status **'
  },
  {
    name: 'Gilbert Chicoine',
    avatar: avatar4,
    status: '|| Karma ||'
  },
  {
    name: 'Mignonette Brodeur',
    avatar: avatar5,
    status: 'Hey there! I am using Chat.'
  },
  {
    name: 'Thomas Menard',
    avatar: avatar6,
    status: 'TM'
  },
  {
    name: 'Melisande Lapointe',
    avatar: avatar7,
    status: 'Available'
  },
  {
    name: 'Danielle Despins',
    avatar: avatar8,
    status: 'Hey there! I am using Chat.'
  }
]

export const dropdownItem: DropdownItemType[] = [
  { icon: 'bx-share', title: 'Reply' },
  { icon: 'bx-share-alt', title: 'Forward' },
  { icon: 'bx-copy', title: 'Copy' },
  { icon: 'bx-bookmark', title: 'Bookmark' },
  { icon: 'bx-star', title: 'Starred' },
  { icon: 'bx-info-square', title: 'Mark as Unread' },
  { icon: 'bx-trash', title: 'Delete' }
]
