import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello/")
      .then(res => res.json())
      .then(data => setUsers(data.users || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>User Info</h1>
      <p>gamoooooooooooviiiiiiiiiiiiiiiiidaaaaaaaaaaaaaa</p>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
