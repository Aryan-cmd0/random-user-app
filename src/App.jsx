import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Navbar from './components/temp'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false); // always runs
      }
    };
    getUsers();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <temp />
      <h1>Random User App</h1>

      <button onClick={fetchUser}>Generate Users</button>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <h2>⏳ Fetching Users...</h2>
      ) : (
        <div className="grid">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default App
