import React from 'react'
import chefIcon from '../assets/chefIcon.png'

const Header = () => {
  return (
    <header className='flex justify-center items-center gap-2 h-[65px] border-b-1 border-gray-200 bg-white shadow-sm'>
      <img src={chefIcon} alt="chef-icon" className='w-[40px] h-[45px]' />
      <h1 className='font-medium text-2xl'>Chef Claude</h1>
    </header>
  )
}

export default Header
