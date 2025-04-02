import React from 'react';
import { FiUsers, FiDollarSign, FiClock, FiCheckCircle } from 'react-icons/fi';
import DashboardLayout from '../components/Layout/DashboardLayout';

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
      Icon: FiUsers as React.ComponentType<React.SVGProps<SVGSVGElement>>,
      label: 'Total de Contatos',
      value: stats.totalContacts,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      Icon: FiDollarSign as React.ComponentType<React.SVGProps<SVGSVGElement>>,
      label: 'Receita Total',
      value: `R$${stats.totalRevenue.toLocaleString()}`,
      color: 'bg-green-100 text-green-800'
    },
    {
      Icon: FiCheckCircle as React.ComponentType<React.SVGProps<SVGSVGElement>>,
      label: 'Tarefas Concluídas',
      value: stats.completedTasks,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      Icon: FiClock as React.ComponentType<React.SVGProps<SVGSVGElement>>,
      label: 'Tarefas Pendentes',
      value: stats.upcomingTasks,
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsArray.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{stat.value}</h3>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Atividades Recentes</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900">Reunião com João Silva</p>
                  <p className="text-sm text-gray-500">Há 2 horas</p>
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                  Concluído
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Próximas Tarefas</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900">Ligar para Maria Santos</p>
                  <p className="text-sm text-gray-500">Hoje às 15:00</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Marcar Concluído
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
