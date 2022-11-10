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
    main: true,
    path: '/app/attendance',
    page: Attendance,
  },
  {
    id: 3,
    name: 'Dataset',
    main: true,
    path: '/app/dataset',
    page: Dataset,
  },
  {
    id: 31,
    name: 'AddKata',
    main: false,
    path: '/app/dataset/addkata',
    page: AddKata,
  },
  {
    id: 32,
    name: 'AddDataset',
    main: false,
    path: '/app/dataset/adddataset',
    page: AddDataset,
  },
  {
    id: 4,
    name: 'Member',
    main: true,
    path: '/app/member',
    page: Member,
  },
  {
    id: 5,
    name: 'Register',
    main: true,
    path: '/app/registration',
    page: Register,
  },
  {
    id: 6,
    name: 'Training',
    main: true,
    path: '/app/training',
    page: Training,
  }
]

export { dataRouters }
