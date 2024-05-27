import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPrint,
  MdEditDocument,
} from 'react-icons/md';

import {
  IoMdPricetag ,
} from 'react-icons/io';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'หน้าหลัก',
    layout: '/admin',
    path: '/home',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'แดชบอร์ดภาพรวม',
    layout: '/admin',
    path: '/dashboard',
    icon: (
      <Icon
        as={MdBarChart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'บันทึกผลการแข่งขันกีฬา',
    layout: '/admin',
    icon: <Icon as={IoMdPricetag } width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
  },
  {
    name: 'บันทึกสรุปผลการแข่งขันกีฬา',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={IoMdPricetag} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'บันทึกผลการแข่งขันกรีฑา',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={IoMdPricetag} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'บันทึกผลคะแนนการประกวด',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={IoMdPricetag} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'บันทึกแก้ไขประเภทกีฬา',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdEditDocument} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'พิมพ์รายงานผลการแข่งขัน',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPrint} width="20px" height="20px" color="inherit" />,
  },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  // },
];

export default routes;
