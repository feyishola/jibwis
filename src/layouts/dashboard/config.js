import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import CalendarDaysIcon from '@heroicons/react/24/solid/CalendarDaysIcon';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import HomeModernIcon from '@heroicons/react/24/solid/HomeModernIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

export const items = [
   {
    title: 'Home',
    path: '/',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    )
  },{
    title: 'Overview',
    path: '/overview',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
 
  {
    title: 'Appointments',
    path: '/appointments',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <CalendarDaysIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Accounts',
    path: '/accounts',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Rooms',
    path: '/rooms',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <HomeModernIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    role:["doctor","patient","admin"],
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
