import { useState } from 'react'

const AddUser = ( {onAdd} ) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [admin, setAdmin] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username){
            alert('Please add a username')
            return
        }

        onAdd({ username, email, admin })

        setUsername('')
        setEmail('')
        setAdmin(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>User</label>
                <input type='text' placeholder='Username' value={username} 
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Email' value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Admin</label>
                <input type='checkbox' 
                value={admin} 
                onChange={(e) => setAdmin(e.currentTarget.checked)}
                checked={admin}/>
            </div>

            <input type='submit' value='Create User' className='btn btn-block'/>
            
        </form>
    )
}

export default AddUser
