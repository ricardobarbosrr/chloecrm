import React from 'react';
import { FiUsers, FiDollarSign, FiCheckCircle, FiClock } from 'react-icons/fi';
import DashboardLayout from '../components/Layout/DashboardLayout';
import Navigation from '../components/Navigation';

interface Stat {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: number | string;
  color: string;
}

const Dashboard: React.FC = () => {
  const stats = {
    totalContacts: 156,
    totalRevenue: 12500,
    completedTasks: 48,
    upcomingTasks: 12
  };

  const statsArray: Stat[] = [
    {
      Icon: FiUsers,
      label: 'Total de Contatos',
      value: stats.totalContacts,
      color: 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
    },
    {
      Icon: FiDollarSign,
      label: 'Receita Total',
      value: `R$${stats.totalRevenue.toLocaleString()}`,
      color: 'bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200'
    },
    {
      Icon: FiCheckCircle,
      label: 'Tarefas Concluídas',
      value: stats.completedTasks,
      color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
    },
    {
      Icon: FiClock,
      label: 'Tarefas Pendentes',
      value: stats.upcomingTasks,
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
    }
  ];

  return (
    <DashboardLayout>
      <Navigation />
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsArray.map((stat, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 shadow-lg transition-all duration-200 hover:shadow-xl ${stat.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">
                  <stat.Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
