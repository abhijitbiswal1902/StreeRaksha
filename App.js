
import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState('Login');
  const [contacts, setContacts] = useState([]);
  const [threshold, setThreshold] = useState(120);

  const handleLogin = (username) => {
    setUser(username);
    setScreen('Dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setScreen('Login');
  };

  const handleNavigate = (screenName) => {
    setScreen(screenName);
  };

  const handleAddContact = (contact) => {
    if (contacts.length < 3) {
      setContacts([...contacts, contact]);
    }
  };

  if (screen === 'Login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (screen === 'Dashboard') {
    return (
      <DashboardScreen
        user={user}
        contacts={contacts}
        threshold={threshold}
        onNavigate={handleNavigate}
        onAddContact={handleAddContact}
      />
    );
  }

  if (screen === 'Settings') {
    return (
      <SettingsScreen
        threshold={threshold}
        onSetThreshold={setThreshold}
        contacts={contacts}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
      />
    );
  }

  return null;
}
