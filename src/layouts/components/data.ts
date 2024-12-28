import type { CategoryType, NotificationType } from '@/layouts/components/types'
import type { MenuItemType } from '@/types/menu'

// Delete
export const categories: CategoryType[] = [
]
// Delete



import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'

export const notifications: NotificationType[] = [
  {
    user: { avatar: avatar1 },
    content: 'Пользователь загрузил свои работы'
  },
  {
    user: { name: 'Новый заказ' },
    message: 'Пользователь купил новый мерч'
  },
  {
    user: { name: 'Новый закак', avatar: avatar3 },
    message: "Заказ в магазине был оформлен"
  },
  {
    icon: 'iconamoon:comment-dots-duotone',
    title: 'У вас 10 новых заявок'
  },
  {
    user: { name: 'Администратор', avatar: avatar5 },
    content: 'Новые разделы сайта'
  }
]

export const profileMenuItems: MenuItemType[] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: 'bx-user-circle',
    route: { name: 'pages.profile' }
  },
  {
    key: 'lock-screen',
    label: 'Lock Screen',
    icon: 'bx-lock',
    route: { name: 'auth.lock-screen' }
  }
]
