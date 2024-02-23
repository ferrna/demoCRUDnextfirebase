'use client'
import { db } from '@/firebase'
import { addDoc, collection, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { FC, useContext, useEffect, useRef } from 'react'
import { UserStateContext } from '../UserStateContext'

interface CreateUserProps {}

const CreateUser: FC<CreateUserProps> = ({}) => {
  const { user, setUser } = useContext(UserStateContext)
  const inputArea = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const validateClick = (e: any) => {
      if (inputArea.current && !inputArea.current.contains(e.target)) {
        console.log('Click por fuera')
        setUser({ name: '', email: '', phone: '' })
      } else {
        console.log('Click dentro')
      }
    }
    document.addEventListener('mousedown', validateClick)
    return () => {
      document.removeEventListener('mousedown', validateClick)
    }
  }, [inputArea])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async () => {
    if (user?.hasOwnProperty('date')) {
      // Update
      //@ts-ignore
      const documentRef = doc(db, 'users', user.id)
      const updatedUser = { ...user, date: serverTimestamp() }
      updateDoc(documentRef, updatedUser)
      setUser({ name: '', email: '', phone: '' })
      alert(`El usuario con el ID: ${user.id}, se ha actualizado correctamente`)
    } else {
      // Create the user
      const collec = collection(db, 'users')
      const document = await addDoc(collec, { ...user, date: serverTimestamp() })
      setUser({ name: '', email: '', phone: '' })
      alert(`Se ha creado el usuario correctamente con el ID: ${document.id}`)
    }
  }
  return (
    <div ref={inputArea}>
      <TextField
        fullWidth
        label="name"
        name="name"
        value={user.name}
        margin="normal"
        onChange={handleInputChange}
        autoComplete="name"
      ></TextField>
      <TextField
        fullWidth
        label="email"
        name="email"
        value={user.email}
        margin="normal"
        onChange={handleInputChange}
        autoComplete="email"
      ></TextField>
      <TextField
        fullWidth
        label="phone"
        name="phone"
        value={user.phone}
        margin="normal"
        onChange={handleInputChange}
        autoComplete="tel"
      ></TextField>
      <Button onClick={onSubmit} variant="contained" color="info" sx={{ mt: 3 }}>
        {user.hasOwnProperty('date') ? 'Actualizar' : 'Crear usuario'}
      </Button>
    </div>
  )
}

export default CreateUser
