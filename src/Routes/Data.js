import {
  Attendance,
  Home,
  Member,
  Register,
  Training
} from '../Pages/index'
import Dataset from '../Pages/Register'

const dataRouters = [
  {
    id: 1,
    name: 'Home',
    path: '/app',
    page: Home,
  },
  {
    id: 2,
    name: 'Attendance',
    path: '/app/attendance',
    page: Attendance,
  },
  {
    id: 3,
    name: 'Dataset',
    path: '/app/dataset',
    page: Dataset,
  },
  {
    id: 4,
    name: 'Member',
    path: '/app/member',
    page: Member,
  },
  {
    id: 5,
    name: 'Register',
    path: '/app/register',
    page: Register,
  },
  {
    id: 6,
    name: 'Training',
    path: '/app/training',
    page: Training,
  }
]

export { dataRouters }
