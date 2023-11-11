import React, { useState, useEffect } from 'react'

const AsyncData = (userId) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
    const fetchUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
        setLoading(false);
    }
        fetchUser();
    }, [userId]);
    if (loading){
        return <p>Loading...</p>
    }

  return (
    <div>
        <h2>{user.name}</h2>
        <p>Email:{user.email}</p>
    </div>
  )
}

export default AsyncData
