import React, { useState } from 'react'

const Formexample = () => {

    const [user, setUser] = useState({
        name: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name.length > 3 && user.password.length > 5){
            alert('Bien ahí!')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
            {user.name}
            <input type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            {user.password}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Formexample