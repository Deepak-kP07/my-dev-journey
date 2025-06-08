// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router'
import MainNavigation from './components/MainNavigation'

export default function RootLayout(){
    return (
        <>
            <MainNavigation/>
            <Outlet/>
        </>
    )
}