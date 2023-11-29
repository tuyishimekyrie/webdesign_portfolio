/* eslint-disable @next/next/no-img-element */
'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/dist/client/components/navigation';

const NavBar = () => {
  const router = useRouter();
  const { status } = useSession();
  const handleSignIn = async () => {
    await signOut({ callbackUrl: "/Pages/Panel" }); // Redirect to the home page after sign-out
    router.push("/Pages/Panel");
  };
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
        {/* <Link href='/api/auth/signin' >
          Login
        </Link> */}
       <button onClick={handleSignIn} className="bg-blue-700 px-6 py-2 rounded-full hover:bg-blue-800">SignIn</button>
      </div>
    </div>
  );
}

export default NavBar