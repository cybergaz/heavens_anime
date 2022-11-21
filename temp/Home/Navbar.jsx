import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  const bottombar = () => {
    
  }
  return (
    <Stack
        direction="row" alignItems="center" p={2} sx={{ position: 'sticky',background:' #000', top: 0, justifyContent: "space-between" }}
        className=" h-28 max-sm:h-16 font-poppins"
    >
      <Link to="/" className=' ' >
        <img src={require('../../assets/logo8.png')} alt="logo" className=' ml-8 h-28 w-auto max-sm:h-16 max-sm:w-auto' />

      </Link>
      <SearchBar />
      <div className='  text-gray-400 text-2xl font-semibold hover:text-white hover:text-3xl cursor-pointer max-sm:hidden duration-200' onMouseOver={bottombar}> Home</div>
      <div className='  text-gray-400 text-2xl font-semibold hover:text-white hover:text-3xl duration-200 cursor-pointer  max-sm:hidden'> Explore</div>
      <div className='  text-gray-400 text-2xl font-semibold hover:text-white hover:text-3xl duration-200 cursor-pointer max-sm:hidden'> Mood</div>
      <div className='  text-gray-400 text-2xl font-semibold hover:text-white hover:text-3xl duration-200 cursor-pointer max-sm:hidden'> Watchlist</div>
      <div className='  text-gray-400 text-2xl font-semibold hover:text-white hover:text-3xl duration-200 cursor-pointer max-sm:hidden'> UserIcon</div>

    </Stack>
    
  )
}

export default Navbar

