import * as FaIcons from 'react-icons/fa'

{/*Sidebar Menu List */}
export const SidebarData = [
    {
        id: 1,
        title: 'Home',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaHome />,
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'Users',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaUsers />,
        path: '/users'     
    },
    {
        id: 3,
        title: 'Reports',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaChartBar/>,
        path: '/reports'
    },
    {
        id: 4,
        title: 'Notifications',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaBell />,
        path: '/notifications'     
    },
    {
        id: 5,
        title: 'Create Users',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaPersonBooth/>,
        path: '/createaccount'
    },
    {
        id: 6,
        title: 'Logout',
        cNmae: 'sidebar-item',
        icon: <FaIcons.FaSignOutAlt />,
        path: '/logout'
    },
]