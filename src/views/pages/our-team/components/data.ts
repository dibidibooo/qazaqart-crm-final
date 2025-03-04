import type { TeamMemberType } from '@/views/pages/our-team/components/types'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'

export const teamData: TeamMemberType[] = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Willie T. Anderson',
    email: 'willieandr@armyspy.com',
    post: 'HR Manager',
    projects: 342,
    duration: '2y',
    tasks: 1032
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Harold J. Hurley',
    email: 'haroldlhurly@armyspy.com',
    post: 'Web Designer',
    projects: 231,
    duration: '1.3y',
    tasks: 543
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Sandra E. Simon',
    email: 'snadraaimon@armyspy.com',
    post: 'UI/UX Designer',
    projects: 123,
    duration: '7m',
    tasks: 231
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Richard J. Lewis',
    email: 'richaaedllewis@armyspy.com',
    post: 'Software Engineer',
    projects: 452,
    duration: '4y',
    tasks: 331
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Margo M. Garris',
    email: 'margogarr@armyspy.com',
    post: 'Lead Product Design',
    projects: 352,
    duration: '6m',
    tasks: 463
  },
  {
    id: 6,
    avatar: avatar6,
    name: 'Ruby L. Fisher',
    email: 'rubylfisher@armyspy.com',
    post: 'Project Manager',
    projects: 231,
    duration: '4y',
    tasks: 573
  }
]
