import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <>
 <nav className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="#">
          <img src="/images/logo.jpg" className="h-8 w-[200px]" alt="alt logo" />
        </Link>
      
      </div>
    </nav>
   
    </>
  )
}

export default NavBar