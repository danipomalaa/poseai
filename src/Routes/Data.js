import {
  Attendance,
  Home,
  Member,
  Register,
  Training,
  Dataset,
  AddKata,
  AddDataset
} from '../Pages/index'

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
    id: 31,
    name: 'AddKata',
    path: '/app/dataset/addkata',
    page: AddKata,
  },
  {
    id: 32,
    name: 'AddDataset',
    path: '/app/dataset/adddataset',
    page: AddDataset,
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
    path: '/app/registration',
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
