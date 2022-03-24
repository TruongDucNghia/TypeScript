import React from 'react'
import { Navigate } from 'react-router-dom'

type checkRoleProps = {
    children: JSX.Element   
}
const checkRole = (props: checkRoleProps) => {
    const isAdmin = false
    if(!isAdmin){
        return <Navigate to="/login" />
    }
  return (
      props.children
  )
}

export default checkRole