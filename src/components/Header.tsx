import React from 'react'
import Logo from '../../public/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex justify-center mt-6 mb-6 items-center'>
      <Image src={Logo} alt="Ramp logo" />
      <span className='ml-3 text-xl bold'>Coding Assesment</span>
    </header>
  )
}

export default Header