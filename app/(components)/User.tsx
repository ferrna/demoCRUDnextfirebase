'use client'
import React, { FC, useContext } from 'react'
import { UserI } from '../(interfaces)/interfaces'
import { IconButton, ListItem, ListItemText } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
//Date formatter
import moment from 'moment'
import { UserStateContext } from '../UserStateContext'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

const User: FC<UserI> = ({ id, name, email, date, phone }) => {
  const { user, setUser } = useContext(UserStateContext)

  const deleteUser = async (e: any) => {
    e.stopPropagation()
    const document = doc(db, 'users', id)
    await deleteDoc(document)
    alert(`El usuario con el ID: ${id}, se ha eliminado correctamente`)
  }
  return (
    <ListItem
      className="sm:min-w-[450px]"
      sx={{ mt: 3, boxShadow: 5 }}
      style={{ backgroundColor: '#2196f3', color: '#fff' }}
      secondaryAction={
        <>
          <IconButton onClick={() => setUser({ name: '', email: '', phone: '' })}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteUser}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={name ? name : '-'} secondary={email ? email : '-'}></ListItemText>
      <ListItemText
        primary={phone ? phone : '-'}
        secondary={moment(date).format('MMM DD, YYYY')}
      ></ListItemText>
    </ListItem>
  )
}

export default User
