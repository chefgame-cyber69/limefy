import React from 'react';
import { ServiceCategory as ServiceCategoryType } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <section id={category.id} className="py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-lime-500 inline-block">
        {category.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategory;