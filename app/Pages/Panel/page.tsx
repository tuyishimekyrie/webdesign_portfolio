/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/app/components/Button";
import TableData from "@/app/components/TableData";
import { signOut,useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  // const router = useRouter();
  const { status, data } = useSession();
  // const handleSignOut = async () => {
  //   await signOut({ callbackUrl: "/" }); // Redirect to the home page after sign-out
  //   router.push("/");
  // };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border-b-2 border-slate-800 pb-2">
        <div className="flex justify-between items-center space-x-8">
          <div className="text-blue-400 font-bold text-xl">DashBoard</div>
          {/* <div>PLayground</div> */}
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex space-x-2 items-center">
            {data && (
              <img
                src={data.user!.image!}
                alt="image"
                className="w-10 rounded-full"
              />
            )}
            <span>{data?.user?.name}</span>
          </div>
          {status == "authenticated" ? (
            // <Link
            //   href="/api/auth/signout"
            //   className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-900"
            // >
            //   Sign Out
            // </Link>
            // <button onClick={handleSignOut}>signout</button>
          <Button/>
          ) : (
            <Link
              href="/api/auth/signin"
              className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-900"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="px-1 py-4">
        <div className="flex items-center justify-between ">
          <div>
          <h1 className="text-3xl">Clients</h1>
          <h3>A list of clients contacts</h3>
          </div>
          <button className="bg-blue-600 px-6 py-1 rounded-full hover:bg-blue-900"  onClick={() => window.location.reload()}>Reload</button>
        </div>
        <TableData />
      </div>
    </div>
  );
};

export default Page;
