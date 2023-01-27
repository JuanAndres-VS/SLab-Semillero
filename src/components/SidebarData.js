import React from 'react'
import { Icon } from '@iconify/react';

export const SidebarData = [
    {
        title: "Inicio",
        icon: <Icon icon="ant-design:home-outlined" color="white" />,
        link: "/Home"
    },
    {
        title: "Facultades",
        icon: <Icon icon="ep:school" color="white" />,
        link: "/Facultades"
    },
    {
        title: "Laboratorios",
        icon: <Icon icon="entypo:lab-flask" color="white" />,
        link: "/Laboratorios"
    },
    {
        title: "Investigación",
        icon: <Icon icon="healthicons:virus-research-alt-outline" color="white" />,
        link: "/Investigacion"
    },
    {
        title: "Configuración",
        icon: <Icon icon="ant-design:setting-outlined" color="white" />,
        link: "/Configuración"
    }
]