import React from 'react'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('../routes/home/Home'))
const Single = lazy(() => import('../routes/single/Single'))
  const RouteController = () => {
  return (

    <>
    
    
    <Routes>
      <Route path='/' element={<Suspense fallback={<p className='text-center w-[300px] h-[300px] text-[54px] my-[300px] ml-[500px]'>Loading...</p>}><Home /></Suspense>} />
      <Route path='/single' element={<Suspense fallback={<p className='text-center w-[300px] h-[300px] text-[54px]'>Loading...</p>}><Single /></Suspense>} />
    </Routes>
    </>
  )
}

export default RouteController