import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.picture.large} alt="" />
      <h1>{user.name.first} {user.name.last}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard
