import React from 'react'
import Head from 'next/Head'
const Header = () => {
  return(
     <div className='flex gap-3 p-6 bg-pink-500'>
        <a href="\">Home page</a>
        <a href="\about">About page</a>
        <a href="\contact">Contact page</a>
        <a href="\address">Address page</a>
        <a href="\hobbies">Hobbies page</a>
        <a href="\favourites">Favourites page</a>
        <a href="\family">Family page</a>
     </div>
  )
}

export default Header