import React from 'react';

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'lead' | 'contact' | 'customer';
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone, company, status }) => {
  const statusColors = {
    lead: 'bg-blue-100 text-blue-800',
    contact: 'bg-green-100 text-green-800',
    customer: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        {company && <p className="text-gray-600">{company}</p>}
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Editar
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
