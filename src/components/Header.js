import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 >{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add User'} 
            onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: "User Manager",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
}

export default Header
