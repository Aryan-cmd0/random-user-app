import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Navbar from './components/navbar'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false); // always runs
      }
    };

    getUsers();
  }, []);

  const fetchUser = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results)
        setLoading(false)
      })
  }

  return (
    <>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
      <Navbar />
      <h1>Random User App</h1>

      <button onClick={fetchUser}>Gernerate Users</button>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))
      )}

    </>
  )
}

export default App
