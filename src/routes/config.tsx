import { Route, Routes, useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// import Home from '../pages/home'
// import TestPage from '../pages/test'
// import TestA from '../pages/testA'
// import TestB from '../pages/testB'
// import TestC from '../pages/testC'

const Home = lazy(() => import('../pages/home'))
const TestPage = lazy(() => import('../pages/test'))
const TestA = lazy(() => import('../pages/testA'))
const TestB = lazy(() => import('../pages/testB'))
const TestC = lazy(() => import('../pages/testC'))

const Loading = () => {
  return <>loading</>
}

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
  return <Suspense fallback={<Loading />}>{element}</Suspense>
}

export default RouteComponent
