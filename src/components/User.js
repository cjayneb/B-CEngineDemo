import { FaTimes } from 'react-icons/fa'


const User = ({ user, onDelete, onToggle }) => {
    return (
        <div className={`user ${user.admin && 'admin'}`} 
            onDoubleClick={() => onToggle(user.id)}>
            <h3>{user.username} 
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(user.id)}
                />
            </h3>
            <p>{user.email}</p>
        </div>
    )
}

export default User
