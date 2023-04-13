import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import TestPage from '../pages/test'


// const Home = lazy(() => import('../pages/home'))
// const TestPage = lazy(() => import('../pages/test'))

const routes = [{
    path: '/',
    element: <Home />,
}, {
    path: '/test',
    element: <TestPage />,
}]

const RouteComponent = () => {
    return <Routes>
        {routes.map((item) => {
            return <Route key={item.path} path={item.path} element={ item.element} />
        }) }
    </Routes>
}

export default RouteComponent