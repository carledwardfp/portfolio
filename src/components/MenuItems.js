import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import FaceIcon from '@material-ui/icons/Face'

const MenuItems =  [
    {
        title:'Home',
        url: '/',
        class: 'nav-links',
        icon: <HomeIcon fontSize='small' />
    },
    {
        title:'About',
        url: '/about',
        class: 'nav-links',
        icon: <FaceIcon fontSize='small' />
    },
    {
        title:'Projects',
        url: '/projects',
        class: 'nav-links',
        icon: <FolderOpenIcon fontSize='small' />
    },
    {
        title:'Contact Me',
        url: '/contact',
        class: 'nav-links-contact',
        icon: <MailOutlineIcon fontSize='small' />
    }
]

export default MenuItems