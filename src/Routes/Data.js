import {
  Attendance,
  Home,
  Member,
  Register,
  Training,
  Dataset,
  AddKata,
  AddDataset,
  AddTraining,
  StartTraining,
  DojoProfile,
  FormRegistration,
  SuccessRegistration,
  PoseEstimation
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
    id: 5,
    name: 'Dojo',
    main: false,
    path: '/app/registration/dojo',
    page: DojoProfile,
  },
  {
    id: 5,
    name: 'FormRegistration',
    main: false,
    path: '/app/registration/form',
    page: FormRegistration,
  },
  {
    id: 5,
    name: 'SuccessRegistration',
    main: false,
    path: '/app/registration/success',
    page: SuccessRegistration,
  },
  {
    id: 6,
    name: 'Training',
    main: true,
    path: '/app/training',
    page: Training,
  },
  {
    id: 6,
    name: 'AddTraining',
    main: false,
    path: '/app/training/addtraining',
    page: AddTraining,
  },
  {
    id: 6,
    name: 'StartTraining',
    main: false,
    path: '/app/training/starttraining',
    page: StartTraining,
  },
  {
    id: 6,
    name: 'PoseEstimation',
    main: false,
    path: '/app/training/estimation',
    page: PoseEstimation,
  }
]

export { dataRouters }
