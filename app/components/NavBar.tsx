import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between  p-2 border-slate-700 border-b-2 ">
      <img
        src="https://reflect.app/home/build/q-7110c4a0.png"
        alt="Logo"
        className="w-10"
      />
      <div className="flex items-center justify-center gap-4 ">
        <Link
          className="hover:text-blue-700 hover:cursor-pointer hover:transition-all"
          href="/Pages/Home"
        >
          Home
        </Link>
        <Link
          className="hover:text-blue-700 hover:cursor-pointer hover:transition-all"
          href="/Pages/About"
        >
          About
        </Link>
        <Link
          className="hover:text-blue-700 hover:cursor-pointer hover:transition-all"
          href="/Pages/Profile"
        >
          Profile
        </Link>
        <Link
          className="hover:text-blue-700 hover:cursor-pointer hover:transition-all"
          href="/Pages/Project"
        >
          Projects
        </Link>
        <Link
          className="hover:text-blue-700 hover:cursor-pointer hover:transition-all"
          href="/Pages/Contact"
        >
          Contact Me
        </Link>
      </div>
      <div className="space-x-4">
        <button className="bg-blue-700 px-6 py-2 rounded-full hover:bg-blue-800">
          Login
        </button>
       
      </div>
    </div>
  );
}

export default NavBar