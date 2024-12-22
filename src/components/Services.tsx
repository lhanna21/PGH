import React from 'react';
import { Container } from './ui/Container';
import { PageHeader } from './ui/PageHeader';
import { Button } from './ui/Button';

export function Services() {
  const services = [
    {
      title: 'LED Furniture',
      description: 'Illuminate your space with our range of LED tables, chairs, and lounges.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
      items: ['LED Tables', 'LED Chairs', 'LED Bars', 'LED Lounges'],
    },
    {
      title: 'Event Packages',
      description: 'Complete event solutions with carefully curated furniture combinations.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
      items: ['Wedding Package', 'Corporate Events', 'Party Package', 'Custom Solutions'],
    },
    {
      title: 'Additional Services',
      description: 'Enhance your event with our complementary services.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
      items: ['Setup & Installation', 'Event Planning', 'Technical Support', 'Transport'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <PageHeader
        title="Our Services"
        description="Transform your event with our premium LED furniture and comprehensive event solutions."
      />
      
      <Container>
        <div className="space-y-24 py-12">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg"></div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-gray-300 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" icon>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}