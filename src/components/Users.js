import User from './User'

const Users = ({ users, onDelete, onToggle }) => {

    

    return (
        <>
          {users.map((user) => (
            <User key={user.id} user={user} onDelete={onDelete} onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Users



