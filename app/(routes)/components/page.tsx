"use client"

import Dropdown from '@/app/_components/dropdown/Dropdown'
import CodeTemplate from '@/app/_components/layouts/CodeTemplate'
import SideMenu from '@/app/_components/side-menu/SideMenu'
import React from 'react'

const components = () => {
  return (
   <>
   <div className='px-7 py-6'>
    <div className='flex justify-center mt-5'>
      <Dropdown/>
    </div>
    <div className='flex mt-5'>
      <SideMenu/>
      <CodeTemplate/>
    </div>
   </div>
   </>
  )
}

export default components
