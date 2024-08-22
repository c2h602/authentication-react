import { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { AuthorizationForm } from './Components/AuthorizationForm';
import { useNavigate } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [registered, setRegistered] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const isRegistered = localStorage.getItem('registered') === 'true';
    const username = localStorage.getItem('username');

    if (userData) {
      setUser(JSON.parse(userData));
      setRegistered(isRegistered);
    }

    setUsername(username)
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('registered');
    setUser(null);
    setRegistered(false);
    navigate('/auth')
  };

  useEffect(() => {
    navigate('/auth');
  }, [navigate]);

  return (
    <MantineProvider>
       {user ? (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
          <h1>Welcome, {username}!</h1>
          <p>You are logged in as {username}</p>
          <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <AuthorizationForm />
      )}
    </MantineProvider>
  );
}
