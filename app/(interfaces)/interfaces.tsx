import firebase from 'firebase/compat/app'

export interface UserI {
  id: string
  name?: string
  email?: string
  date?: firebase.firestore.Timestamp
  data: () => any
  phone?: string
}
