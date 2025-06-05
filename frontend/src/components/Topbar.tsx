import { SignedOut,SignedIn, SignOutButton } from '@clerk/clerk-react';
import { LayoutDashboardIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import SignInAuthButtons from '../components/SignInAuthButtons';




const Topbar = () => {
  const isAdmin =false;
  return (
    <div className ="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
          Spotify
      </div>
      <div className='flex items-center gap-4'>
        {isAdmin && (
          <Link
            to={"/admin"}>
              <LayoutDashboardIcon className="siz-4 mr-2" />
              Admin DashBoard
            </Link>
        )}
        <SignedIn>
          <SignOutButton  />
        </SignedIn>
        <SignedOut >
          <SignInAuthButtons />
          
        </SignedOut>
      </div>
    </div>
  )
}

export default Topbar