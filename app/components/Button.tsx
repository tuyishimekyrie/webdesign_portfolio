import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/components/navigation';
import React from 'react'

const Button = () => {
      const router = useRouter();
      const { status, data } = useSession();
      const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" }); // Redirect to the home page after sign-out
        router.push("/");
    };
    const handleSignIn = async () => {
      await signOut({ callbackUrl: "/Pages/Panel" }); // Redirect to the home page after sign-out
      router.push("/Pages/Panel");
    };
  return (
    <div>
      <button
        className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-900"
        onClick={handleSignOut}
      >
        signout
      </button>
      
    </div>
  );
}

export default Button