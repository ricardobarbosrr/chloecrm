import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">Chloe CRM</h1>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/contacts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Contatos
              </a>
            </li>
            <li>
              <a href="/deals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Oportunidades
              </a>
            </li>
            <li>
              <a href="/tasks" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Tarefas
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
