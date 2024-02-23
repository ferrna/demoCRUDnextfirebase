'use client'
import { db } from '@/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { FC, useEffect, useState } from 'react'
import User from './User'
import { UserI } from '../(interfaces)/interfaces'

interface UsersListProps {}

const UsersList: FC<UsersListProps> = ({}) => {
  const [users, setUsers] = useState<UserI[]>([])

  useEffect(() => {
    const collec = collection(db, 'users')
    const consult = query(collec, orderBy('date', 'desc'))
    const unsubscribe = onSnapshot(consult, (consultSnapshot) => {
      const newSnapshot = consultSnapshot.docs.map((doc) => formatUserData(doc))
      setUsers([...newSnapshot])
    })
    return unsubscribe
  }, [])
  return <div>{users && users.map((user) => <User {...user} key={user.id} />)}</div>
}

function formatUserData<T extends UserI>(document: T): T {
  return {
    ...document.data(),
    id: document.id,
    date: document.data().date?.toDate().getTime(),
  }
}

export default UsersList
