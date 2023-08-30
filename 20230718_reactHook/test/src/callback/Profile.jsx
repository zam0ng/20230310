import React from 'react'

const Profile = ({onSave}) => {
    // console.log({onSave})
  return (
    <div>
        {onSave()}
    </div>
  )
}

export default Profile