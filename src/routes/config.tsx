import { Route, Routes, useRoutes } from 'react-router-dom'

import Home from '../pages/home'
import TestPage from '../pages/test'
import TestA from '../pages/testA'
import TestB from '../pages/testB'
import TestC from '../pages/testC'

// const Home = lazy(() => import('../pages/home'))
// const TestPage = lazy(() => import('../pages/test'))

const routes = [
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/test1/b',
    element: <TestB />,
  },
  {
    element: <Home />,
    children: [
      {
        path: 'a',
        element: <TestA />,
      },
      {
        path: 'b',
        element: <TestB />,
      },
      {
        path: '*',
        element: <TestC />,
      },
    ],
  },
]

const RouteComponent = () => {
  const element = useRoutes(routes)
  return element
}

export default RouteComponent
