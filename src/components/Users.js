import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers]=useState([])
    const [error, setError]=useState(null)
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>console.log(data))
      .catch(err => setError('error fetching data'))
    },[])
  return (
    <div>
      <h1>List of Users</h1>
      {error? <p>{error}</p> : null}
    </div>
  )
}
