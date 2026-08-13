import React from 'react';
import * as Icons from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconResolver: React.FC<IconResolverProps> = ({ name, className = 'w-5 h-5', size }) => {
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string; size?: number }>>)[name] || Icons.BookOpen;
  return <IconComponent className={className} size={size} />;
};
