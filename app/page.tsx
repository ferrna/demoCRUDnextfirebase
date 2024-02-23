'use client'
import { useState } from 'react'
import CreateUser from './(components)/CreateUser'
import UsersList from './(components)/UsersList'
import { UserStateContext } from './UserStateContext'

export default function Home() {
  const [user, setUser] = useState({ name: '', email: '', phone: '' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:px-24 md:py-12">
      <UserStateContext.Provider value={{ user, setUser }}>
        <CreateUser />
        <UsersList />
      </UserStateContext.Provider>
    </main>
  )
}
