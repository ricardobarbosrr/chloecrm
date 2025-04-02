import React from 'react';
import { FiHome, FiUsers, FiDollarSign, FiList, FiSettings } from 'react-icons/fi';

const Navigation = () => {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/' },
    { icon: FiUsers, label: 'Contatos', path: '/contacts' },
    { icon: FiDollarSign, label: 'Negócios', path: '/deals' },
    { icon: FiList, label: 'Tarefas', path: '/tasks' },
    { icon: FiSettings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-800 shadow-lg">
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Chloe CRM
        </span>
      </div>
      <div className="mt-6">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="px-4 py-2">
              <a 
                href={item.path}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
