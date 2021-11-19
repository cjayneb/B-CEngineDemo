import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import Footer from './components/Footer'
import About from './components/About'
import Chart from './components/Chart'
import ViewChartBTN from "./components/ViewChartBTN"


const App = () => {

  const [showAddUser, setShowAddUser] = useState (false)
  const [users, setUsers] = useState([])

  useEffect(() => {

    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }
    getUsers()

  }, [])

  // Fetch Users from mock backend
  const fetchUsers = async () => {
    const resp = await fetch('http://localhost:5000/users')
    const data = await resp.json()

    return data
  }

  // Fetch User from mock backend
  const fetchUser = async (id) => {
    const resp = await fetch(`http://localhost:5000/users/${id}`)
    const data = await resp.json()

    return data
  }


  // Add User
  const addUser = async (user) => {

    const resp = await fetch('http://localhost:5000/users',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = await resp.json()

    setUsers([...users, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newUser = {id, ...user}
    // setUsers([...users, newUser])
  }

  // Delete User
  const deleteUser = async (id) => {

    await fetch(`http://localhost:5000/users/${id}`,
     {method: 'DELETE',})

    setUsers(users.filter((user) => user.id !== id))
  }

  // Toggle Verified
  const toggleAdmin = async (id) => {

    const userToToggle = await fetchUser(id)
    const updatedUser = { ...userToToggle, admin: !userToToggle.admin}

    const resp = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })

    const data = await resp.json()

    setUsers(users.map((user) => 
        user.id === id ? 
        { ...user, admin: !user.admin } 
        : user)
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddUser(!showAddUser)} showAdd={showAddUser}/>
        
          <Route exact path='/' 
          render={() => (
            <>
            <>
              {showAddUser && <AddUser onAdd={addUser} />}
              {users.length > 0 ? (
                <Users
                  users={users}
                  onDelete={deleteUser}
                  onToggle={toggleAdmin} />
              ) : ('No users')}
            </>
            <br /><ViewChartBTN />
            </>
            
          )}
          />
          <Route path='/chart' component={Chart} />
          <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  )
}

// class App extends React.Component {
//   render(){
//     return <h1>from aasdas</h1>
//   }
// }



export default App;
