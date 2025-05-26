import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
    <div className="text-primary mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);