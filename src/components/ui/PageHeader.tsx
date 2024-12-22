import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}