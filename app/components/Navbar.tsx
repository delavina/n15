

import { auth, signOut, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
        <Image src="/dogon.svg" alt="logo" width={40} height={40} />
        </Link>
        <div className="flex items-center gap-5 text-stone-900">
          {session && session?.user ? (
            <>
              <Link href="/product/create">
                <span>Anlegen</span>
              </Link>

              <form action={async () => {
              "use server";
              await signOut({ redirectTo: '/' });
            }}>
                <button type='submit'>Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
        ) : (
            <form action={async () => {
              "use server";
              await signIn('github');
            }}>
              <button type='submit'>
                Login
              </button>
            </form>
          )}
        </div>
      </nav>  
    </header>
  )
}
