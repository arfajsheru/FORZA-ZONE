import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const locaction = useLocation();

    useEffect(() => {
        if(locaction.pathname.includes('collection')){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[locaction])


  return  showSearch  && visible ? (
    <div className='text-center'>
        <div className='inline-flex items-center justify-between border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='flext-1 outline-none bg-inherit text-sm ' type="text" placeholder='Search' autoFocus />
            <img src={assets.search_icon} className='w-4' alt="" />
        </div>
        <img  onClick={ () => setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />

    </div>
  ) : null;
}

export default SearchBar