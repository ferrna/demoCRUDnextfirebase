import { createContext } from 'react'
import { UserI } from './(interfaces)/interfaces'
import firebase from 'firebase/compat/app'

interface UserData {
  id?: string
  name: string
  email: string
  date?: firebase.firestore.Timestamp
  data?: () => any
  phone: string
}

export const UserStateContext = createContext<{
  user: UserData
  setUser: React.Dispatch<React.SetStateAction<UserData>>
}>({
  user: { name: '', email: '', phone: '' },
  setUser: () => {},
})
