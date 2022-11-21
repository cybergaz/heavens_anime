import { React , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  { Paper, IconButton } from '@mui/material'



const SearchBar = () => {
  return (
    <Paper  
        component="form"
        onSubmit={ () => {}}
        sx={{ borderRadius:20 , backgroundColor: 'transparent' }}
        
        className=" rounded-lg sm:pt-6 "
    >
        <IconButton type='submit' sx={{ }} >
        <img src={require('../../assets/searchicon.png')} alt="Sicon" className=' pb-2 max-sm:visible max-sm:mr-28 '/>
        </IconButton>
        <IconButton type="menu" ><img src={require('../../assets/menu.png')} alt="Sicon" className=' pb-2 sm:invisible max-sm:visible'/> </IconButton>
            <input 
            className=' bg-transparent border-b-2 border-white text-center font-light text-2xl pb-2 max-sm:hidden '
            placeholder='Search Anime'
            value=""
            onChange={ () => {} }
            /> 
    
    </Paper>
  )
}

export default SearchBar