import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === 'light' ? (
        <FiMoon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      ) : (
        <FiSun className="w-6 h-6 text-yellow-500" />
      )}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<div>Contatos</div>} />
            <Route path="/deals" element={<div>Negócios</div>} />
            <Route path="/tasks" element={<div>Tarefas</div>} />
            <Route path="/settings" element={<div>Configurações</div>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
